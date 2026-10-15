// Авто-переводчик для КИ-Поле
// Переводит все текстовые узлы и placeholder'ы, используя window.t() из i18n.js
(function() {
  'use strict';

  function getLang() {
    if (window.State && window.State.lang) return window.State.lang;
    if (typeof window.getLang === 'function') return window.getLang();
    return localStorage.getItem('kipole_lang') || localStorage.getItem('lang') || 'ru';
  }

  function isCyrillic(s) {
    return /[А-Яа-яЁё]/.test(s);
  }

  function translateNode(node) {
    const original = node.textContent;
    const trimmed = original.trim();
    if (!trimmed || trimmed.length < 2 || !isCyrillic(trimmed)) return;
    if (typeof window.t !== 'function') return;
    const translated = window.t(trimmed);
    if (translated && translated !== trimmed) {
      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];
      node.textContent = leading + translated + trailing;
    }
  }

  function translateAll() {
    const lang = getLang();
    if (lang === 'ru') return;
    if (typeof window.t !== 'function') return;

    // Текстовые узлы
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          const p = node.parentElement;
          if (!p) return NodeFilter.FILTER_REJECT;
          const tag = p.tagName;
          if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const n of nodes) translateNode(n);

    // Placeholder
    document.querySelectorAll('[placeholder]').forEach(el => {
      const ph = el.getAttribute('placeholder');
      if (ph && isCyrillic(ph)) {
        const tr = window.t(ph);
        if (tr && tr !== ph) el.setAttribute('placeholder', tr);
      }
    });

    // Title и aria-label
    document.querySelectorAll('[title], [aria-label]').forEach(el => {
      ['title', 'aria-label'].forEach(attr => {
        const v = el.getAttribute(attr);
        if (v && isCyrillic(v)) {
          const tr = window.t(v);
          if (tr && tr !== v) el.setAttribute(attr, tr);
        }
      });
    });
  }

  // Следим за сменой языка
  window.addEventListener('languageChanged', () => {
    setTimeout(translateAll, 80);
  });

  // Следим за новыми элементами в DOM
  let timer = null;
  const observer = new MutationObserver(() => {
    clearTimeout(timer);
    timer = setTimeout(translateAll, 120);
  });

  function start() {
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    setTimeout(translateAll, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  window.retranslateAll = translateAll;
})();
