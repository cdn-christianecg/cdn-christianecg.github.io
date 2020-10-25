var button = document.getElementById('submit');
var form = document.getElementById('form');
var res = document.getElementById('res');

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
    console.log(
        'https://node-red-christianecg.mybluemix.net/name_api?name=' + name
    );

    var response = await fetch(
        'https://node-red-christianecg.mybluemix.net/name_api?name=' + name
    );
    var data = await response.json();

    res.innerHTML = data['name'];
}
