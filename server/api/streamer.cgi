#!/bin/bash
. ../include/jshn.sh

echo ""
echo ""

# Притормаживаем с ответом
sleep 2

# Извлекаем параметр 'id' из запроса
QUERY_STRING="$QUERY_STRING"
id=$(echo "$QUERY_STRING" | sed -n 's/^.*id=\([^&]*\).*$/\1/p' | tr -d "\n")

if [[ -z "$id" ]]; then
  echo "{\"error\":\"id not found\"}"
  exit 1
fi

# Проверяем, что параметр id безопасен для использования в имени файла
safe_id=$(echo "$id" | sed 's/[^a-zA-Z0-9_-]//g')
if [[ -z "$safe_id" ]]; then
  echo "{\"error\":\"invalid id\"}"
  exit 1
fi

# Проверяем, что утилита jshn.sh доступна
if ! command -v json_init &> /dev/null; then
  echo "{\"error\": \"jshn.sh не установлена или недоступна\"}"
  exit 1
fi


# Определяем путь к файлу
directory="/tmp/streams"
mkdir -p "$directory"
file_path="$directory/$safe_id.json"

# Если фаил уже существует то запускаем рутинный сценарий
if [[ -e "$file_path" ]]; then
  echo "{\"warning\":\"file $file_path' already exist.\"}"
  exit 0
fi

# Создаем файл
if echo "{\"log\":\"initial\"}" > "$file_path"; then
  
  #echo "{\"msg\":\"file '$file_path' created\"}"

  # Загружаем логи с помощью dmesg
  logs=$(dmesg)

  # Преобразуем каждую строку в объект JSON
  json_logs=$(echo "$logs" | sed 's/^ *//;s/ *$//' | awk '{
  gsub(/"/, "\\\""); # Экранируем кавычки
  printf "{\"log\": \"%s\"},\n", $0
  }' | sed '$ s/,$//') # Убираем последнюю запятую

  echo "{\"logs\":[$json_logs]}"

# . /tmp/jshn/$safe_id.json
# json_init

# # Добавляем массив "logs"
# json_add_array logs
# while read -r line; do
#   # Удаляем лишние пробелы и экранируем символы
#   trimmed_line=$(echo "$line" | sed 's/^ *//;s/ *$//')
#   json_add_object
#   json_add_string log "$trimmed_line"
#   json_close_object
# done <<< "$logs"
# json_close_array

# # Выводим JSON
# json_dump

  
  exit 0
else
  echo "{\"error\":\"error with '$file_path' creation\"}"  
  exit 1
fi