import re

with open('www/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Заменяем любые вхождения 'History is empty.' на t('History is empty.')
# Но только если они еще не обернуты в t()
html = re.sub(r"(?<!t\()'History is empty\.'", "t('History is empty.')", html)
html = re.sub(r'(?<!t\()"History is empty\."', 't("History is empty.")', html)
html = re.sub(r'(?<!t\()\`History is empty\.\`', 't(`History is empty.`)', html)

with open('www/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ index.html: JS-код для History is empty. обернут в функцию t()!")
