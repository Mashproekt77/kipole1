with open('www/i18n.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 1. Исправляем 'Land category' на 'Yer toifasi' в узбекском блоке (строка 1783)
if 'Land category' in lines[1782]:
    lines[1782] = lines[1782].replace('Land category', 'Yer toifasi')

# 2. Вставляем недостающие ключи 'Проёмы' и '+ Проём' в блок uz
for i, line in enumerate(lines):
    if 'uz: {' in line:
        # Вставляем сразу после открывающей скобки узбекского блока
        new_keys = "        'Проёмы': 'Teshiklar',\n        '+ Проём': '+ Teshik',\n"
        lines.insert(i + 1, new_keys)
        break

with open('www/i18n.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("✅ Узбекский словарь (uz) успешно обновлен!")
