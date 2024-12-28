#!/bin/bash
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
  echo "{\"msg\":\"file '$file_path' created\"}"
  exit 0
else
  echo "{\"error\":\"error with '$file_path' creation\"}"  
  exit 1
fi