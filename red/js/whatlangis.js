/**
 * Código para el consumo de una API de reconocimiento del lenguaje
 *
 * Por: Christian Elías <https://christianecg.com>
 * Este código contiene una licencia MIT para su uso.
 *
 * Modificado por última vez: 27 de octubre, 2020.
 * Por: Christian Elías Cruz González
 *
 * Historial de modificaciones:
 * 24/10/2020 - Commit inicial del archivo - Añadido el addEventListener del formulario
 * 24/10/2020 - Añadidos cambios para recibir un fichero json
 * 24/10/2020 - Se reemplaza fetch/then por modo async/await-fetch
 * 25/10/2020 - Añadido control de errores en la transmisión
 * 25/10/2020 - IFs modificados a  IFs ternarios
 * 25/10/2020 - Eliminado modo de recepción json. El modelo solo necesita recibir texto plano
 * 25/10/2020 - Corregido problema de CORS, dirección de API cambiada a ruta local
 * 27/10/2020 - Añadidos comentarios para permitir la distribución del fichero
 */

/**
 * NOTAS DE USO:
 *
 * Para poder hacer uso correctamente de éste código, el fichero HTML deberá contener tres
 * elementos fundamentales: Un formulario con el ID form, un campo de texto input con el ID
 * txt, y una etiqueta para almacenar la respuesta, con el ID res.
 *
 * Igualmente, es necesario que la API sea invocada via GET desde /whatlangis_api, y que
 * permita recibir un parámetro denomidado text, y cuyo valor sea el texto a identificar.
 *
 * Finalmente, es necesario que la API retorne exclusivamente texto plano.
 *
 * Este fichero puede ser llamado directamente en tu fichero HTML desde el cdn, via
 * http://cdn.christianecg.com/red/js/whatlangis.js ó
 * https://cdn.christianecg.com/red/js/whatlangis.js
 * según sea necesario. O bien, puedes descargarlo e incorporarlo a tu código original.
 */

// Se obtiene el formulario a través del ID form
var form = document.getElementById('form');

/* 
    Se obtiene el campo de respuesta, con el ID res. 
    Este campo puede ser un tag h1 ... h6, o un p tag,
    o cualquier otro elemento que contenga etiqueta
    de apertura y cierre.
 */
var res = document.getElementById('res');

// Diccionario de idiomas
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

// Se deshabilita la opción de autocompletado del formulario
form.setAttribute('autocomplete', 'off');

// Añadimos el evento al intentar enviar el formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();
    res.innerHTML = 'Cargando...';
    getLang();
});

// Función asíncrona que realiza la consulta a la API via GET
async function getLang() {
    var txt = getTxt();
    var response = await fetch('/whatlangis_api?text=' + txt);
    var data = await response.text();
    res.innerHTML =
        langs[data] == undefined
            ? 'Se ha producido una excepción'
            : langs[data];
}

// Validación y retorno del contenido del objeto txt
// El objeto #txt debería ser un input de tipo texto
function getTxt() {
    return document.getElementById('txt').value == ''
        ? '-'
        : document.getElementById('txt').value;
}
