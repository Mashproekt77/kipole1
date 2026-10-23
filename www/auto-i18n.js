
(function() {
    if (!window.t) {
        setTimeout(arguments.callee, 500);
        return;
    }
    function translateNode(node) {
        if (node.nodeType === 3) { // Только текстовые узлы!
            const original = node.textContent;
            const trimmed = original.trim();
            if (!trimmed || trimmed.length < 2) return;
            const translated = window.t(trimmed);
            if (translated && translated !== trimmed) {
                node.textContent = original.replace(trimmed, translated);
            }
        } else if (node.nodeType === 1) { // Элементы
            if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;
            if (node.hasAttribute('placeholder')) {
                const ph = node.getAttribute('placeholder').trim();
                const trans = window.t(ph);
                if (trans && trans !== ph) node.setAttribute('placeholder', trans);
            }
            for (let i = 0; i < node.childNodes.length; i++) {
                translateNode(node.childNodes[i]);
            }
        }
    }
    function translateAll() {
        translateNode(document.body);
    }
    setTimeout(translateAll, 500);
    setTimeout(translateAll, 1500);
    let timer;
    const observer = new MutationObserver(() => {
        clearTimeout(timer);
        timer = setTimeout(translateAll, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('languageChanged', () => { setTimeout(translateAll, 100); });
})();
