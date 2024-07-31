import l10n from '../locales/allLocales.js';

const initPageLocale = () => {
    let main = document.getElementById('content')
    main.style.display = 'none'

    let language = document.documentElement.lang,
    nodes = document.querySelectorAll('[data-l10n]'),
    i = nodes.length

    while (i--) {
        let key = nodes[i].getAttribute('data-l10n');
        nodes[i].innerHTML = l10n[language][key];
    }

    let loader = document.getElementById('loader')
    main.style.display = 'block'
    loader.style.display = 'none'
    document.title = l10n[language]['title']
}

initPageLocale()