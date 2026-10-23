import re

with open('www/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. ИСПРАВЛЯЕМ СЛОМАННЫЕ ПОЛЯ (ПЛОЩАДЬ)
html = html.replace('placeholder="Площадь, "', 'data-i18n-placeholder="Площадь, м²" placeholder="Площадь, м²"')
html = html.replace('placeholder="Площадь,"', 'data-i18n-placeholder="Площадь, м²" placeholder="Площадь, м²"')
html = re.sub(r'placeholder="t\(\'([^\']+)\'\)"', r'data-i18n-placeholder="\1" placeholder="\1"', html)
html = re.sub(r'placeholder="t\("([^"]+)"\)"', r'data-i18n-placeholder="\1" placeholder="\1"', html)

# 2. ЖЕСТКАЯ ЗАМЕНА ОСТАЛЬНЫХ ТЕКСТОВ
texts_to_wrap = [
    "ГОДЫ", "Постройки", "Реконструкции", "Завершения", "ПРОЁМЫ", 
    "ОКНО", "Материал", "ИНЖЕНЕРНЫЕ СИСТЕМЫ", "СМЕЖНИКИ / ПРАВООБЛАДАТЕЛИ", 
    "ФИО", "КН", "СЕРВИТУТЫ / ОБРЕМЕНЕНИЯ / ЗОУИТ", "сервитут", 
    "Описание", "АКТ СОГЛАСОВАНИЯ", "Сформировать", "Площадь ЗУ по документам, м²", 
    "Площадь фактическая, м²", "Категория земель", "— выберите —", "ВРИ", "ИЖС", 
    "Коэффициент конфигурации k", "Проверить расхождение", "Метод измерений", 
    "Система координат / зона МСК", "Базовая станция / сеть", "КАТАЛОГ ТОЧЕК", 
    "+ Точка", "Карта", "СКП по точкам:", "нет точек", "History is empty."
]

for text in texts_to_wrap:
    # Ищем тег, внутри которого есть этот текст (с любыми пробелами)
    # Например: <div class="title">ГОДЫ</div> или <h3> ГОДЫ </h3>
    pattern = r'(<(?:div|span|p|h1|h2|h3|h4|h5|h6|label|button|option|th|td)\b[^>]*?>)\s*(' + re.escape(text) + r')\s*(</(?:div|span|p|h1|h2|h3|h4|h5|h6|label|button|option|th|td)>)'
    
    def repl(m):
        open_tag = m.group(1)
        inner_text = m.group(2)
        close_tag = m.group(3)
        if 'data-i18n=' in open_tag: 
            return m.group(0)
        return f'{open_tag} data-i18n="{text}"{inner_text}{close_tag}'
        
    html = re.sub(pattern, repl, html)

# 3. СПЕЦИАЛЬНЫЙ ФИКС ДЛЯ "History is empty."
# Если он не нашелся по регулярке выше (например, из-за стилей), принудительно ищем по ID
html = html.replace(
    '<div id="historyList"><p class="text-muted" style="font-size:0.9rem;">History is empty.</p></div>',
    '<div id="historyList"><p class="text-muted" style="font-size:0.9rem;" data-i18n="History is empty.">History is empty.</p></div>'
)
# На случай, если там другие атрибуты
html = re.sub(
    r'(<p[^>]*class="text-muted"[^>]*>)\s*History is empty\.\s*(</p>)',
    r'\1<span data-i18n="History is empty.">History is empty.</span>\2',
    html
)

with open('www/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ index.html: жесткий фикс для всех текстов применен")
