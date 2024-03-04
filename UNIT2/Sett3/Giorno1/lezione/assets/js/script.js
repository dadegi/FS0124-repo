class Ordini {
	constructor(_categoria, _articolo, _prezzo) {
		this.categoria = _categoria;
		this.articolo = _articolo;
		this.prezzo = _prezzo;
	}
}

class Mouse extends Ordini {
	constructor(_sconto, ...Ordini) {
		super(...Ordini);
		this.sconto = _sconto;
	}

	calcolaPrezzo() {
		return this.prezzo - this.prezzo * (this.sconto / 100) + 2;
	}
}

class Tastiera extends Ordini {
	constructor(_sconto, ...Ordini) {
		super(...Ordini);
		this.sconto = _sconto;
	}

	calcolaPrezzo() {
		return this.prezzo - this.prezzo * (this.sconto / 100) + 5;
	}
}

class Monitor extends Ordini {
	constructor(_sconto, ...Ordini) {
		super(...Ordini);
		this.sconto = _sconto;
	}

	calcolaPrezzo() {
		return this.prezzo - this.prezzo * (this.sconto / 100) + 15;
	}
}

const btnAggiungi = document.getElementById('aggiungi');
const ordini = [];
let mioOrdine;

btnAggiungi.addEventListener('click', e => {
	e.preventDefault();

	let categoria = document.getElementById('categoria').value;
	let articolo = document.getElementById('articolo').value;
	let przUni = document.getElementById('prezzoUni').value;
	let sconto = document.getElementById('sconto').value;

	switch (categoria) {
		case 'mouse':
			mioOrdine = new Mouse(sconto, categoria, articolo, przUni);
            mioOrdine.przFinale = mioOrdine.calcolaPrezzo();
			ordini.push(mioOrdine);
			break;

		case 'tastiere':
			mioOrdine = new Tastiera(sconto, categoria, articolo, przUni);
            mioOrdine.przFinale = mioOrdine.calcolaPrezzo();
			ordini.push(mioOrdine);
			break;

		case 'monitor':
			mioOrdine = new Monitor(sconto, categoria, articolo, przUni);
            mioOrdine.przFinale = mioOrdine.calcolaPrezzo();
			ordini.push(mioOrdine);
			break;
	}

    console.log(ordini);

	stampaOrdini();
});

const stampaOrdini = () => {
	let ordine = document.getElementById('ordine');
	ordine.innerHTML = '';
	ordini.forEach(dettaglio => {
		let colonna1 = document.createElement('td');
		colonna1.innerText = `${dettaglio.categoria}`;
		let colonna2 = document.createElement('td');
		colonna2.innerText = `${dettaglio.articolo}`;
		let colonna3 = document.createElement('td');
		colonna3.innerText = `${dettaglio.prezzo}`;
		let colonna4 = document.createElement('td');
		colonna4.innerText = `${dettaglio.sconto}`;
		let colonna5 = document.createElement('td');
        colonna5.innerText = `${dettaglio.przFinale}`;
		let riga = document.createElement('tr');
		riga.append(colonna1, colonna2, colonna3, colonna4, colonna5);
		ordine.appendChild(riga);
	});
};
