votoEsame = 15;
nome = 'Mario';

document.getElementById('persona').innerHTML =
	nome + ' ha preso ' + votoEsame + " all'esame";

// By Fabio Brogi
if (
	(nome === 'Mario' && votoEsame < 18) ||
	(nome !== 'Mario' && votoEsame >= 18)
) {
	document.getElementById('permesso').innerHTML = nome + ' può entrare';
} else {
	document.getElementById('permesso').innerHTML = nome + ' non può entrare';
}

const prodotti = [
	{
		nomeProd: 'monitor 17"',
		qty: 24,
		price: 210,
	},
	{
		nomeProd: 'monitor 17"',
		qty: 30,
		price: 85,
	},
	{
		nomeProd: 'monitor 17"',
		qty: 11,
		price: 115,
	},
];

let valutazione;

if (prodotti[0].price < 100) {
	valutazione = 'economico';
} else if (prodotti[0].price < 150) {
	valutazione = 'giusto';
} else {
	valutazione = 'caro';
}

document.getElementById('prodotto1').innerHTML =
	'Il prodotto ' +
	prodotti[0].nomeProd +
	', giacenza pezzi ' +
	prodotti[0].qty +
	' ha un prezzo ' +
	valutazione;

if (prodotti[1].price < 100) {
	valutazione = 'economico';
} else if (prodotti[1].price < 150) {
	valutazione = 'giusto';
} else {
	valutazione = 'caro';
}

document.getElementById('prodotto2').innerHTML =
	'Il prodotto ' +
	prodotti[1].nomeProd +
	', giacenza pezzi ' +
	prodotti[1].qty +
	' ha un prezzo ' +
	valutazione;

if (prodotti[2].price < 100) {
	valutazione = 'economico';
} else if (prodotti[2].price < 150) {
	valutazione = 'giusto';
} else {
	valutazione = 'caro';
}

document.getElementById('prodotto3').innerHTML =
	'Il prodotto ' +
	prodotti[2].nomeProd +
	', giacenza pezzi ' +
	prodotti[2].qty +
	' ha un prezzo ' +
	valutazione;
