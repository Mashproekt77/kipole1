import re
from bs4 import BeautifulSoup

with open('www/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Прячем JavaScript, чтобы BeautifulSoup его не сломал
scripts = []
def save_script(match):
    scripts.append(match.group(0))
    return f"__SCRIPT_PLACEHOLDER_{len(scripts)-1}__"

html_protected = re.sub(r'<script\b[^>]*>.*?</script>', save_script, html, flags=re.DOTALL)

# 2. Парсим только HTML
soup = BeautifulSoup(html_protected, 'html.parser')
tags_to_check = ['div', 'span', 'label', 'button', 'h1', 'h2', 'h3', 'h4', 'p', 'option', 'strong', 'a']
count = 0

for tag in soup.find_all(tags_to_check):
    if tag.has_attr('data-i18n'): continue
    text = tag.get_text(strip=True)
    
    # Проверяем, что это текст, а не код
    if text and len(text) > 1 and not text.isdigit() and re.search('[a-zA-Zа-яА-ЯёЁ]', text):
        if '{' in text or '}' in text or 'function' in text: continue
        
        # Добавляем data-i18n (не меняем структуру тегов!)
        tag['data-i18n'] = text
        count += 1

html_modified = str(soup)

# 3. Возвращаем JavaScript на место
def restore_script(match):
    idx = int(match.group(1))
    return scripts[idx]

final_html = re.sub(r'__SCRIPT_PLACEHOLDER_(\d+)__', restore_script, html_modified)

with open('www/index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print(f"✅ Безопасно размечено текстов: {count}")
