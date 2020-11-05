var button = document.getElementById('submit');
var form = document.getElementById('form');
var res = document.getElementById('res');

form.setAttribute('autocomplete', 'off');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    res.innerHTML = 'Cargando...';
    getName();
});

function getName() {
    var name = document.getElementById('name').value;
    res.innerHTML = 'Hola, ' + name;
}
