var button = document.getElementById('submit');
var form = document.getElementById('form');
var res = document.getElementById('res');

form.addEventListener('submit', (event) => {
    var name = document.getElementById('name').value;
    event.preventDefault();

    console.log(
        'https://node-red-christianecg.mybluemix.net/name_api?name=' + name
    );

    fetch('https://node-red-christianecg.mybluemix.net/name_api?name=' + name)
        .then((get_name) => {
            res.innerHTML = get_name;
        })
        .catch((reason) => {
            console.log(reason);
            res.innerHTML = 'Se ha producido una excepción';
        });
});
