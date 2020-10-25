var button = document.getElementById('submit');
var form = document.getElementById('form');
var res = document.getElementById('res');
var es_button = document.getElementById('es');
var en_button = document.getElementById('en');
var lang = 'es';

es_button.classList.add('lang-button-selected');

es_button.addEventListener('click', (event) => {
    es_button.classList.contains('lang-button-selected')
        ? 0
        : es_button.classList.add('lang-button-selected');
    en_button.classList.contains('lang-button-selected')
        ? en_button.classList.remove('lang-button-selected')
        : 0;
    lang = 'es';
});

en_button.addEventListener('click', (event) => {
    en_button.classList.contains('lang-button-selected')
        ? 0
        : en_button.classList.add('lang-button-selected');
    es_button.classList.contains('lang-button-selected')
        ? es_button.classList.remove('lang-button-selected')
        : 0;
    lang = 'en';
});

form.setAttribute('autocomplete', 'off');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    res.innerHTML = 'Cargando...';
    getTranslate();
});

async function getTranslate() {
    var text = document.getElementById('text').value;
    var msg = '{"lang":"' + lang + '","text":"' + text + '"}';

    var response = await fetch(
        'https://node-red-christianecg.mybluemix.net/translate_api',
        {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(msg),
        }
    );
    var data = await response.text();

    res.innerHTML = data == undefined ? 'Se ha producido una excepción' : data;
}
