import re

with open('www/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Убираем матрешки из data-i18n
# Ищем t(t(...("Текст")...)) и заменяем на просто "Текст"
pattern_data_i18n = r'data-i18n=t\((?:t\()+[\'"]([^\'"]+)[\'"](?:\))+'
html = re.sub(pattern_data_i18n, r'data-i18n="\1"', html)

# 2. Убираем матрешки из data-i18n-placeholder
pattern_placeholder = r'data-i18n-placeholder=t\((?:t\()+[\'"]([^\'"]+)[\'"](?:\))+'
html = re.sub(pattern_placeholder, r'data-i18n-placeholder="\1"', html)

# 3. Убираем матрешки из массивов JavaScript (Снос/демонтаж, Гибель и т.д.)
pattern_js = r't\((?:t\()+[\'"]([^\'"]+)[\'"](?:\))+'
html = re.sub(pattern_js, r't("\1")', html)

with open('www/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ HTML очищен от вложенных функций t(t(...))!")
