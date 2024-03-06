const character = document.getElementById('character');
const wait = document.getElementById('wait');
const show = document.getElementById('show');
let singleCharacter;
let list = [];

window.addEventListener('load', init);

function init() {
	createList();
}

async function createList() {
	await fetch('https://swapi.dev/api/people')
		.then(response => {
			return response.json();
		})
		.then(data => {
			list = data;
			selectAll();
		})
		.catch(err => {
			console.log('Errore nel recupero dei dati: ', err);
		});
}

function selectAll() {
	for (let i = 0; i < list.results.length; i++) {
		let option = document.createElement('option');
		option.setAttribute('value', i);
		option.innerText = list.results[i].name;
		character.appendChild(option);
	}
}

character.addEventListener('change', function () {
	let idCharacter = parseInt(character.value) + 1;

	return new Promise((resolve, reject) => {
		wait.style.display = 'block';
		show.style.display = 'none';
		setTimeout(() => {
			caricaDettagli(idCharacter).then(() => {
				if (singleCharacter && idCharacter) {
					resolve(stampa(singleCharacter));
				} else {
					wait.style.display = 'none';
					show.style.display = 'block';
					reject(
						(show.innerHTML =
							'<h3>Errore nel caricamento dei dati</h3>')
					);
				}
			});
		}, 3000);
	});
});

async function caricaDettagli(id) {
	let response = await fetch(`https://swapi.dev/api/people/${id}`).then(
		response => {
			return response.json();
		}
	).then(data => {
        singleCharacter = data;
        return singleCharacter;
    });
}

const stampa = character => {
	console.log(character);
	show.innerHTML = '';
	wait.style.display = 'none';
	show.style.display = 'block';
	let testo = document.createElement('h3');
	let nome = character.name;
	testo.innerText = `Ecco il tuo personaggio: ${nome}`;
	show.appendChild(testo);
};
