from bs4 import BeautifulSoup
import re

with open('www/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
tags_to_check = ['div', 'span', 'label', 'button', 'h1', 'h2', 'h3', 'h4', 'p', 'option', 'strong', 'a']

print("=== ТЕКСТ БЕЗ data-i18n (кандидаты на перевод) ===")
count = 0
for tag in soup.find_all(tags_to_check):
    if tag.name in ['script', 'style']: continue
    if tag.has_attr('data-i18n'): continue
    text = tag.get_text(strip=True)
    if text and len(text) > 1 and not text.isdigit() and re.search('[a-zA-Zа-яА-ЯёЁ]', text):
        if '{' in text or '}' in text or 'function' in text: continue
        print(f"<{tag.name}>: {text}")
        count += 1
print(f"\nНайдено кандидатов: {count}")
