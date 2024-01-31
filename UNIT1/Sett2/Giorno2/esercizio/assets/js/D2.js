/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12;
let num2 = 12;

if (num1 > num2) {
	document.getElementById('maggiore').innerHTML =
		num1 + ' è maggiore di ' + num2;
} else if (num2 > num1) {
	document.getElementById('maggiore').innerHTML =
		num2 + ' è maggiore di ' + num1;
} else {
	document.getElementById('maggiore').innerHTML =
		num1 + ' e ' + num2 + ' sono uguali';
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 5;

if (num3 !== 5) {
	document.getElementById('notEqual').innerHTML = num3 + ' è diverso da 5';
} else {
	document.getElementById('notEqual').innerHTML = num3 + ' è uguale a 5';
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num4 = 35;

if (num4 % 5 === 0) {
	document.getElementById('divisibile').innerHTML = num4 + ' è divisibile 5';
} else {
	document.getElementById('divisibile').innerHTML =
		num4 + ' non è divisibile 5';
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num5 = 6;
let num6 = 13;

if (
	num5 === 8 ||
	num6 === 8 ||
	num5 + num6 === 8 ||
	num5 - num6 === 8 ||
	num6 - num5 === 8
) {
	document.getElementById('otto').innerHTML = 'La condizione è verificata';
} else {
	document.getElementById('otto').innerHTML =
		'La condizione non è verificata';
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 49;
let spedizione = 10;

if (totalShoppingCart >= 50) {
	document.getElementById('totalCart').innerHTML =
		"Costo dell'ordine: " + totalShoppingCart;
} else {
	document.getElementById('totalCart').innerHTML =
		"Costo dell'ordine: " + (totalShoppingCart + spedizione);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let blackFriday = 0.8;
let totalShoppingCart2 = 80 * blackFriday;
let spedizione2 = 10;

if (totalShoppingCart2 >= 50) {
	document.getElementById('black').innerHTML =
		"Costo dell'ordine: " + totalShoppingCart2;
} else {
	document.getElementById('black').innerHTML =
		"Costo dell'ordine: " + (totalShoppingCart2 + spedizione);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
let y = 29;
let z = 23;
let arrayOrdina = document.getElementById('arrayOrdina');

if (x > y) {
	if (z > x) {
		arrayOrdina.innerHTML = z + ', ' + x + ', ' + y;
	} else {
		if (z > y) {
			arrayOrdina.innerHTML = x + ', ' + z + ', ' + y;
		} else {
			arrayOrdina.innerHTML = x + ', ' + y + ', ' + z;
		}
	}
} else {
	if (z > y) {
		arrayOrdina.innerHTML = z + ', ' + y + ', ' + x;
	} else {
		if (z > x) {
			arrayOrdina.innerHTML = y + ', ' + z + ', ' + x;
		} else {
			arrayOrdina.innerHTML = y + ', ' + x + ', ' + z;
		}
	}
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let test = 15;

if (typeof test === 'number') {
	document.getElementById('typeOf').innerHTML = 'È un numero';
} else {
	document.getElementById('typeOf').innerHTML = 'Non è un numero';
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero = 44;

if (numero % 2 === 0) {
	document.getElementById('pari').innerHTML = numero + ' è un numero pari';
} else {
	document.getElementById('pari').innerHTML = numero + ' è un numero dispari';
}

// ESERCIZIO 10
//   Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
let val = 15;
let maggiore = document.getElementById('range');
if (val < 5) {
	maggiore.innerHTML = 'Minore di 5';
} else if (val < 10) {
	maggiore.innerHTML = 'tra 5 e 9';
} else {
	maggiore.innerHTML = 'uguale o maggiore di 10';
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
	name: 'John',
	lastName: 'Doe',
	skills: ['javascript', 'html', 'css'],
};

me.city = 'Toronto';

document.getElementById('city').innerHTML = me.name + ', ' + me.lastName + ', ' + me.skills + ', ' + me.city;

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
document.getElementById('rimuovi').innerHTML = me.name + ', ' + me.lastName + ', ' + me.skills + ', ' + me.city;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
document.getElementById('pop').innerHTML = me.name + ', ' + me.skills + ', ' + me.city;

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let nuovoArray = [];
nuovoArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
document.getElementById('push').innerHTML = nuovoArray;

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

nuovoArray[9] = 100;
document.getElementById('sostituisci').innerHTML = nuovoArray;
