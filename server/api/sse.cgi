#!/bin/bash
echo ""

# Установка заголовков (Lighttpd добавит заголовки через конфиг, но на всякий случай добавим их здесь)
echo "Content-Type: text/event-stream"
echo "Cache-Control: no-cache"
echo "Connection: keep-alive"
echo ""

# Функция отправки событий SSE
send_event() {
    local id=$1
    local message=$2

    echo "id: $id"
    echo "data: $message"
    echo ""
}

echo "Start test streaming..."


# Основной цикл отправки событий
id=0
while true; do
    id=$((id + 1))
    send_event "$id" "Hello from Bash! Event ID: $id"
    sleep 2  # Отправлять каждые 2 секунды
done