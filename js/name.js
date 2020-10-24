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
            console.log(get_name);
            res.innerHTML = '<h2 id="res">' + get_name + '</h2>';
        })
        .catch((reason) => {
            console.log(reason);
            res.innerHTML = '<h2 id="res"> Se ha producido una excepción </h2>';
        });
});
