import re
from bs4 import BeautifulSoup

with open('www/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Прячем JS
scripts = []
def save_script(match):
    scripts.append(match.group(0))
    return f"__SCRIPT_PLACEHOLDER_{len(scripts)-1}__"

html_protected = re.sub(r'<script\b[^>]*>.*?</script>', save_script, html, flags=re.DOTALL)

soup = BeautifulSoup(html_protected, 'html.parser')
count = 0

# Ищем только теги, внутри которых НЕТ других тегов (только текст)
for tag in soup.find_all():
    if tag.name in ['script', 'style', 'html', 'head', 'body', 'title', 'meta', 'link', 'br', 'hr']: continue
    if tag.has_attr('data-i18n'): continue
    
    # ГЛАВНОЕ УСЛОВИЕ: внутри тега не должно быть других тегов!
    if len(tag.find_all(True)) > 0: continue
    
    text = tag.get_text(strip=True)
    
    if text and len(text) > 1 and not text.isdigit() and re.search('[a-zA-Zа-яА-ЯёЁ]', text):
        if '{' in text or '}' in text or 'function' in text: continue
        
        tag['data-i18n'] = text
        count += 1

html_modified = str(soup)

# Возвращаем JS
def restore_script(match):
    idx = int(match.group(1))
    return scripts[idx]

final_html = re.sub(r'__SCRIPT_PLACEHOLDER_(\d+)__', restore_script, html_modified)

with open('www/index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print(f"✅ Безопасно размечено (только листья): {count} текстов")
