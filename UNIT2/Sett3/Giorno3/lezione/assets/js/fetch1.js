let elenco = [];
const lista = document.getElementById('lista');

const readData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(data => {
			elenco = data;
			console.log(elenco);
			stampa();
		})
		.catch(err => {
			console.log('Errore nel recupero dei dati: ', err);
		});
};

function stampa() {
	for (let i = 0; i < elenco.length; i++) {
		let li = document.createElement('li');
		li.innerText = elenco[i].name;
		lista.appendChild(li);
	}
}

readData();
