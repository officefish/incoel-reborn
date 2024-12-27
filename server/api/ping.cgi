#!/bin/sh

# Устанавливаем заголовки CORS
echo "Access-Control-Allow-Origin: http://localhost:5173"
echo "Access-Control-Allow-Methods: GET, POST, OPTIONS"
echo "Access-Control-Allow-Headers: Content-Type"

# Указываем тип содержимого
echo "Content-Type: application/json"

# Обязательная пустая строка между заголовками и телом ответа
echo ""

# Тело ответа
echo '{"hello":"world"}'