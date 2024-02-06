/* ESERCIZIO 1
	Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const titolo = document.querySelector('h1');

const changeTitle = function () {
	let vecchioTitolo = titolo.innerText;
	titolo.innerText =
		`Nuovo titolo modificato da JS; il vecchio titolo era: ***${vecchioTitolo}***`;
};

changeTitle();

/* ESERCIZIO 2
	Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
	titolo.classList.add('myHeading');
};

addClassToTitle();

/* ESERCIZIO 3
	Scrivi una funzione per che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
	const paragrafi = document.querySelectorAll('div p');
	for (let i = 0; i < paragrafi.length; i++) {
		let vecchioTesto = paragrafi[i].innerText;
		paragrafi[i].innerText =
			'Nuovo testo aggiunto da JS; il vecchio testo era: ***' +
			vecchioTesto +
			'***';
	}
};

changePcontent();

/* ESERCIZIO 4
	Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
	const links = document.querySelectorAll('a:not(footer a');
	for (let i = 0; i < links.length; i++) {
		links[i].setAttribute('href', 'https://www.google.com');
		links[i].setAttribute('target', '_blank');
	}
};

changeUrls();

/* ESERCIZIO 5
	Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
	const secondaLista = document.getElementById('secondList');
	const newLi = document.createElement('li');
	newLi.innerText = '4th';
	secondaLista.appendChild(newLi);
};

addToTheSecond();

/* ESERCIZIO 6
	Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/

const addParagraph = function () {
	const primoDiv = document.querySelectorAll('div')[0];
	const nuovoParagrafo = document.createElement('p');
	nuovoParagrafo.innerText = 'Nuovo paragrafo creato da JS';
	primoDiv.appendChild(nuovoParagrafo);
};

addParagraph();

/* ESERCIZIO 7
	Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
	const primaLista = document.getElementById('firstList');
	primaLista.style.display = 'none';
};

hideFirstUl();

/* ESERCIZIO 8
	Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
	const liste = document.querySelectorAll('ul');
	for (let i = 0; i < liste.length; i++) {
		liste[i].style.backgroundColor = 'green';
	}
};

paintItGreen();

/* ESERCIZIO 9
	Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
	titolo.style.cursor = 'pointer';
	titolo.addEventListener('click', function () {
		let scritta = titolo.innerText.split('');
		console.log(scritta);
		scritta.pop();
		let nuovaScritta = scritta.join('');
		console.log(nuovaScritta);
		titolo.innerText = nuovaScritta;
	});
};

makeItClickable();

/* ESERCIZIO 10
	Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () {
	const footer = document.querySelector('footer');
	footer.style.cursor = 'pointer';
	footer.addEventListener('click', function () {
		const footerLink = document.querySelector('footer a');
		const linkFooter = footerLink.getAttribute('href');
		alert(linkFooter);
	});
};

revealFooterLink();

/* ESERCIZIO 11
	Crea una funzione che crei una tabella nell'elemento con id "tableArea".
	La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {
	// Selezione e creazione tabella principale
	const tableContainer = document.getElementById('tableArea');
	const tabella = document.createElement('table');

	// Creazione riga di intestazione
	const intestazione = document.createElement('tr');
	const thId = document.createElement('th');
	thId.innerText = 'ID';
	const thImmagine = document.createElement('th');
	thImmagine.innerText = 'Immagine';
	const thNome = document.createElement('th');
	thNome.innerText = 'Nome Prodotto';
	const thQuantita = document.createElement('th');
	thQuantita.innerText = 'Quantità';
	const thPrezzo = document.createElement('th');
	thPrezzo.innerText = 'Prezzo';

	// Popolamento riga di intestazione
	intestazione.appendChild(thId);
	intestazione.appendChild(thImmagine);
	intestazione.appendChild(thNome);
	intestazione.appendChild(thQuantita);
	intestazione.appendChild(thPrezzo);

	tabella.appendChild(intestazione);

	// ARRAY PER LEGGERE LA BASE DATI E CREARE A CICLO LE RIGHE DELLA TABELLA
	const immagini = [
		'https://m.media-amazon.com/images/I/61ToKShnQvL.__AC_SY445_SX342_QL70_ML2_.jpg',
		'https://m.media-amazon.com/images/I/61CVR4L6IDL._AC_SX679_.jpg',
		'https://m.media-amazon.com/images/I/81WeAqaLe8L.__AC_SX300_SY300_QL70_ML2_.jpg',
		'https://m.media-amazon.com/images/I/61CVR4L6IDL.__AC_SX300_SY300_QL70_ML2_.jpg',
		'https://m.media-amazon.com/images/I/61stmTPwiLL.__AC_SX300_SY300_QL70_ML2_.jpg',
	];

	// Ciclo per creare le singole righe della tabella, con lo stesso schema dell'intestazione
	for (let i = 0; i < immagini.length; i++) {
		const nuovaRiga = document.createElement('tr');
		const tdId = document.createElement('td');
		tdId.innerText = i + 1;
		const tdImmagine = document.createElement('td');
		tdImmagine.innerHTML = '<img src="' + immagini[i] + '">';
		const tdNome = document.createElement('td');
		tdNome.innerText = 'Tablet';
		const tdQuantita = document.createElement('td');
		tdQuantita.innerText = Math.floor(Math.random() * 25);
		const tdPrezzo = document.createElement('td');
		tdPrezzo.innerText = '€ ' + Math.floor(Math.random() * 250);

		nuovaRiga.appendChild(tdId);
		nuovaRiga.appendChild(tdImmagine);
		nuovaRiga.appendChild(tdNome);
		nuovaRiga.appendChild(tdQuantita);
		nuovaRiga.appendChild(tdPrezzo);

		tabella.appendChild(nuovaRiga);
	}

	tableContainer.appendChild(tabella);
};

generateTable();

/* ESERCIZIO 12
	Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function (imgSrc, nome, quantita, prezzo) {
	const table = document.querySelector('table');
	const righe = document.querySelectorAll('table tr');

	const nuovaRiga = document.createElement('tr');
	const tdId = document.createElement('td');
	tdId.innerText = righe.length;
	const tdImmagine = document.createElement('td');
	tdImmagine.innerHTML = '<img src="' + imgSrc + '">';
	const tdNome = document.createElement('td');
	tdNome.innerText = nome;
	const tdQuantita = document.createElement('td');
	tdQuantita.innerText = quantita;
	const tdPrezzo = document.createElement('td');
	tdPrezzo.innerText = '€ ' + prezzo;

	nuovaRiga.appendChild(tdId);
	nuovaRiga.appendChild(tdImmagine);
	nuovaRiga.appendChild(tdNome);
	nuovaRiga.appendChild(tdQuantita);
	nuovaRiga.appendChild(tdPrezzo);

	table.appendChild(nuovaRiga);
};

addRow(
	'https://m.media-amazon.com/images/I/81ye1iv291L.__AC_SX300_SY300_QL70_ML2_.jpg',
	'Tablet',
	Math.floor(Math.random() * 25),
	Math.floor(Math.random() * 250)
);

/* ESERCIZIO 14
	Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {
	const immaginiTabella = document.querySelectorAll('table tr td img');
	for (let i = 0; i < immaginiTabella.length; i++) {
		immaginiTabella[i].style.display = 'none';
	}
};

hideAllImages();

/* EXTRA ESERCIZIO 15
	Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {
	const cambiaColore = document.getElementById('changeMyColor');
	cambiaColore.style.cursor = 'pointer';
	cambiaColore.addEventListener('click', function () {
		let rosso = Math.round(Math.random() * 255);
		let verde = Math.round(Math.random() * 255);
		let blu = Math.round(Math.random() * 255);

		let coloreRandom = 'rgb(' + rosso + ',' + verde + ',' + blu + ')';
		cambiaColore.style.color = coloreRandom;
	});
};

changeColorWithRandom();

/* EXTRA ESERCIZIO 16
	Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {
	const allElements = document.querySelectorAll(
		'h1, h2, h3, p, a, li, th, td'
	);
	for (let i = 0; i < allElements.length; i++) {
		allElements[i].innerText = [...allElements[i].innerText]
			.filter(carattere => {
				carattere = carattere.toLowerCase();
				return (
					carattere !== 'a' &&
					carattere !== 'e' &&
					carattere !== 'i' &&
					carattere !== 'o' &&
					carattere !== 'u'
				);
			})
			.join('');
	}
};

deleteVowels();
