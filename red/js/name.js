var button = document.getElementById('submit');
var form = document.getElementById('form');
var res = document.getElementById('res');

form.setAttribute('autocomplete', 'off');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    res.innerHTML = 'Cargando...';
    getName();
});

async function getName() {
    var name = document.getElementById('name').value;

    var response = await fetch('/name_api?name=' + name);
    var data = await response.json();
    res.innerHTML =
        data['name'] == undefined
            ? 'Se ha producido una excepción'
            : data['name'];
}
