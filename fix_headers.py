from bs4 import BeautifulSoup
import re

with open('www/index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# Ищем все теги с data-i18n
for el in soup.find_all(attrs={"data-i18n": True}):
    val = el['data-i18n']
    
    # 1. Убираем обертку t("...") внутри data-i18n, если она есть
    match = re.search(r't\([\'"](.*?)[\'"]\)', val)
    if match:
        val = match.group(1)
        el['data-i18n'] = val
        
    # 2. Удаляем вложенные теги span с таким же data-i18n (распутываем матрешку)
    for child in el.find_all(attrs={"data-i18n": val}):
        if child != el:
            child.unwrap()

with open('www/index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))
print("✅ Матрешки в заголовках удалены, t() очищен!")
