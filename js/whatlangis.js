var button = document.getElementById('submit');
var form = document.getElementById('form');
var res = document.getElementById('res');

const langs = {
    af: 'Afrikaans',
    sq: 'Albanés',
    ar: 'Árabe',
    hy: 'Armenio',
    az: 'Azerbaiyano',
    ba: 'Bashkir',
    eu: 'Vasco',
    be: 'Bielorruso',
    bn: 'Bengalí',
    bs: 'Bosnio',
    bg: 'Búlgaro',
    km: 'Khmer central',
    zh: 'Chino (simplificado)',
    'zh-TW': 'Chino (tradicional)',
    cv: 'Chuvasio',
    cs: 'Checo',
    da: 'Danés',
    nl: 'Holandés',
    en: 'Inglés',
    eo: 'Esperanto',
    et: 'Estonio',
    fi: 'Finés',
    fr: 'Francés',
    ka: 'Georgiano',
    de: 'Alemán',
    el: 'Griego',
    gu: 'Gujarati',
    ht: 'Haitiano',
    he: 'Hebreo',
    hi: 'Hindi',
    hu: 'Húngaro',
    is: 'Islandés',
    id: 'Indonesio',
    it: 'Italiano',
    ja: 'Japonés',
    kk: 'Kazajo',
    ky: 'Kirguiz',
    ko: 'Coreano',
    ku: 'Kurdo',
    lv: 'Letón',
    lt: 'Lituano',
    ml: 'Malayalam',
    mn: 'Mongol',
    nb: 'Noruego Bokmal',
    nn: 'Noruego Nynorsk',
    pa: 'Panjabi',
    fa: 'Persa',
    pl: 'Polaco',
    pt: 'Portugués',
    ps: 'Pastún',
    ro: 'Rumano',
    ru: 'Ruso',
    sk: 'Eslovaco',
    so: 'Somalí',
    es: 'Español',
    sv: 'Sueco',
    ta: 'Tamil',
    te: 'Telugu',
    tr: 'Turco',
    uk: 'Ucraniano',
    ur: 'Urdu',
    vi: 'Vietnamita',
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
        getName();
    } catch (error) {
        res.innerHTML = 'Se ha producido una excepción';
    }
});

async function getName() {
    var name = document.getElementById('name').value;

    var response = await fetch(
        'https://node-red-christianecg.mybluemix.net/whatlangis_api?text=' +
            name
    );
    var data = await response.text();

    res.innerHTML = langs[data];
}
