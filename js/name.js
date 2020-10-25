var button = document.getElementById('submit');
var form = document.getElementById('form');
var res = document.getElementById('res');

form.addEventListener('submit', (event) => {
    var name = document.getElementById('name').value;
    event.preventDefault();

    console.log(
        'https://node-red-christianecg.mybluemix.net/name_api?name=' + name
	);
	
	var response = await fetch('https://node-red-christianecg.mybluemix.net/name_api?name='+name);
	var data = await response.json();

	res.innerHTML = data;
});
