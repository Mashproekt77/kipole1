import re

with open('www/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Добавляем data-i18n-placeholder для полей ввода
placeholders = [
    'Moscow, Example st., 1',
    'Иванов И.И., аттестат №12345'
]
for ph in placeholders:
    # Если есть placeholder="..." и нет data-i18n-placeholder
    pat = rf'(<input[^>]*?)(placeholder="' + re.escape(ph) + r'")'
    def repl_ph(m):
        if 'data-i18n-placeholder' in m.group(1): return m.group(0)
        return f'{m.group(1)} data-i18n-placeholder="{ph}" {m.group(2)}'
    html = re.sub(pat, repl_ph, html)

# 2. Добавляем data-i18n для кнопок и блоков
# (Эти строки уже есть в i18n.js, нужно просто привязать их к HTML)
targets = [
    'Проекты', 'Сброс текущего', 'Service Worker: не зарегистрирован',
    'Отключить', 'В площадь', 'В контур', 'В гео-точку', 'Лог',
    'Поддерживаются: Leica DISTO, Bosch GLM, ADA, Stanley и другие BLE-дальномеры (UART-сервисы 0xFFE0 / 0xFFF0 / 0x18F0). Нужен HTTPS или localhost, браузер Chrome / Edge / Opera.',
    'Приватность: данные (ФИО инженера, заказчик, подпись, координаты GPS, фото) хранятся локально в IndexedDB и localStorage вашего браузера и никуда не передаются. При использовании чужого устройства очищайте данные кнопкой «Сброс».'
]

for target in targets:
    # Ищем кнопки, дивы, спаны с этим текстом
    # Паттерн ищет тег, внутри которого есть этот текст, и добавляет data-i18n, если его нет
    pattern = r'(<(?:button|div|span|p|h2|h3)[^>]*?)(>)(\s*)(' + re.escape(target) + r')(\s*)(</(?:button|div|span|p|h2|h3)>)'
    
    def repl_tag(m):
        if 'data-i18n=' in m.group(1): return m.group(0)
        return f'{m.group(1)} data-i18n="{target}"{m.group(2)}{m.group(3)}{m.group(4)}{m.group(5)}{m.group(6)}'
    
    html = re.sub(pattern, repl_tag, html)

# 3. Специфичный фикс для "Service Worker: не зарегистрирован" в динамическом блоке
# (На случай, если он генерируется через JS)
html = html.replace("'<div>Service Worker: не зарегистрирован</div>'", "'<div data-i18n=\"Service Worker: не зарегистрирован\">Service Worker: не зарегистрирован</div>'")
html = html.replace('`<div class="info-box" style="margin-top:8px;">Service Worker: не зарегистрирован</div>`', '`<div class="info-box" style="margin-top:8px;" data-i18n="Service Worker: не зарегистрирован">Service Worker: не зарегистрирован</div>`')
html = html.replace('Service Worker: <strong>не зарегистрирован</strong>', '<span data-i18n="Service Worker: не зарегистрирован">Service Worker: не зарегистрирован</span>')

with open('www/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ index.html: недостающие data-i18n и data-i18n-placeholder внедрены")
