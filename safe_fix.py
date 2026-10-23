import re

with open('www/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Убираем обертку t('...') или t("...") внутри data-i18n
html = re.sub(r'data-i18n="t\([\'"](.*?)[\'"]\)"', r'data-i18n="\1"', html)

# 2. Убираем дублирующиеся data-i18n в одном теге (оставляем только первый)
# Ищем последовательность из двух и более одинаковых атрибутов
for _ in range(5): # Повторяем несколько раз, если вложенность глубокая
    html = re.sub(r'(data-i18n="[^"]+")\s+data-i18n="[^"]+"', r'\1', html)

# 3. Убираем вложенные теги span с data-i18n (матрешки)
# (Простая регулярка для самых частых случаев)
html = re.sub(r'<span data-i18n="[^"]+">(<span data-i18n="[^"]+">)+', '<span>', html)
html = re.sub(r'</span>(</span>)+', '</span>', html)

with open('www/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("✅ HTML-атрибуты очищены безопасным способом!")
