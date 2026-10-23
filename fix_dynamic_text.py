with open('www/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Исправляем "История пуста"
old_history = """if (!hist.length) { c.innerHTML = '<p class="text-muted" style="font-size:0.9rem;" data-i18n="История пуста.">История пуста.</p>'; return; }"""
new_history = """if (!hist.length) { c.innerHTML = '<p class="text-muted" style="font-size:0.9rem;">' + t('History is empty.') + '</p>'; return; }"""
html = html.replace(old_history, new_history)

# 2. Исправляем кнопки "Открыть" и "Удалить"
html = html.replace('>Открыть</button>', '>${t("Открыть")}</button>')
html = html.replace('>Удалить</button>', '>${t("Удалить")}</button>')

with open('www/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("✅ Динамические тексты в JS успешно обернуты в t()!")
