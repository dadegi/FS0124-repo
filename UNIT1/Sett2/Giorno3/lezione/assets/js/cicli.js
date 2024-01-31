// WHILE

let contaWhile = 11;

while (contaWhile <= 10) {
	document.getElementById('while').innerHTML +=
		'<li>Iterazione nr. ' + contaWhile + '</li>';
	contaWhile++;
}

// DO-WHILE

contaWhile = 11;

do {
	document.getElementById('doWhile').innerHTML +=
		'<li>Iterazione nr. ' + contaWhile + '</li>';
	contaWhile++;
} while (contaWhile <= 10);

// Se la condizione NON È verificata da subito, il while non comincia il ciclo, mentre il do-while esegue comunque almeno una iterazione

// FOR

// Creazione elenco di numeri

for (let i = 1; i <= 10; i++) {
	document.getElementById('for').innerHTML +=
		'<li>Iterazione nr. ' + i + '</li>';
}

// Iterazione di un array semplice

const studenti = [
	'Pavlo',
	'Vito',
	'Alessio',
	'Anna Maria',
	'Clarissa',
	'Matteo',
	'Gabriele',
];

for (let i = 0; i < studenti.length; i++) {
	document.getElementById('elenco').innerHTML +=
		'<li>' + studenti[i] + '</li>';
}

// Iterazione di un array di oggetti

const utenti = [
	{
		nome: 'Mario',
		cognome: 'Rossi',
		eta: 25,
		email: 'mario@rossi.com',
	},
	{
		nome: 'Aldo',
		cognome: 'Bianchi',
		eta: 23,
		email: 'aldo@bianchi.it',
	},
	{
		nome: 'Maria',
		cognome: 'Verdi',
		eta: 20,
		email: 'maria@verdi.org',
	},
	{
		nome: 'Giovanna',
		cognome: 'Neri',
		eta: 32,
		email: 'giovanna@neri.net',
	},
	{
		nome: 'Nicola',
		cognome: 'Gialli',
		eta: 28,
		email: 'nicola@gialli.info',
	},
];

for (let i = 0; i < utenti.length; i++) {
	document.getElementById('elencoOggetti').innerHTML +=
		'<li>' +
		utenti[i].nome +
		' ' +
		utenti[i].cognome +
		', di anni ' +
		utenti[i].eta +
		', email: ' +
		utenti[i].email;
}

// Creazione di una somma di elementi numerici

const numeri = [1, 8, 65, 23, 54, 12];

let somma = 0;

for (let i = 0; i < numeri.length; i++) {
	somma += numeri[i]; // somma = somma + numeri[i]
	document.getElementById('somma').innerText = 'La somma dei numeri contenuti nell\'array è ' + somma;
	if (somma >= 50) {
		document.getElementById('somma').innerText = 'Il valore ' + somma + ' è superiore a 50';
		break;
	}
}
