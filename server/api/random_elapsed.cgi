#!/bin/bash
echo ""
echo ""

# Генерация случайного времени ожидания от 5 до 15 секунд
elapsed_time=$((RANDOM % 11 + 5))
# Засекаем начальное время в миллисекундах
echo ""
# Ждём указанное количество секунд
sleep "$elapsed_time"

echo  "{\"sleep\":$elapsed_time}" >&1