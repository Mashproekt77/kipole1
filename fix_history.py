with open('www/i18n.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'ru: {' in line:
        new_key = "        'History is empty.': 'История пуста.',\n"
        lines.insert(i + 1, new_key)
        break

with open('www/i18n.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)
print("✅ Русский перевод для 'History is empty' добавлен!")
