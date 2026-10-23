import re

with open('www/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Собираем все ключи из HTML
keys = set(re.findall(r'data-i18n="([^"]+)"', html))

with open('www/i18n.js', 'r', encoding='utf-8') as f:
    i18n_text = f.read()

# Ищем узбекский блок
uz_match = re.search(r'uz:\s*\{([^}]+)\}', i18n_text, re.DOTALL)
uz_text = uz_match.group(1) if uz_match else ""

missing_uz = []
for key in keys:
    if f"'{key}'" not in uz_text and f'"{key}"' not in uz_text:
        missing_uz.append(key)

print(f"=== Не хватает в узбекском (uz): {len(missing_uz)} ===")
# Выводим первые 30, чтобы мы поняли масштаб
for k in sorted(missing_uz)[:30]:
    print(f"'{k}',")
