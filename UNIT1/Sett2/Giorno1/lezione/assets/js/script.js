document.write('Testo scritto da Javascript'); // operazione 8

document.getElementById('titolo').innerHTML = 'Hello World!'; // operazione 2

// window.alert('Questo è un alert'); // operazione 1

console.log('Verifica la variabile valore:'); // operazione 3

let valore = 15; // operazione 4
console.log(valore); // operazione 5

valore = valore + 3; // operazione 6

console.log(valore); // operazione 7

let nome = 'Mario';
let eta = 30;
let citta = 'Roma';

document.getElementById('persona').innerHTML =
	nome + ', di anni ' + eta + ', abitante a ' + citta;

const numero = 37;
console.log(numero);
// numero = 45;
// console.log(numero); // verrà generato un errore in console: le costanti non possono essere riasssegnate
// Questo errore IMPEDISCE l'esecuzione del resto dello script, perché quasi tutti gli errori in Javascript sono BLOCCANTI

// BLOCCHI DI CODICE
// Si definiscono blocchi di codice tutto ciò che viene scritto tra parentesi graffe
// sono codici isolati dal resto dello script, se non richiamati
// Le variabili/costanti di blocco possono essere usate solo ALL'INTERNON del blocco nel quale sono dichiarate

{
	let personaggio = 'Pippo';
	console.log(personaggio);
}

// console.log(personaggio); // verrà generato un errore in console: la variabile utilizzata è una variabile di blocco

let cambio = 'Pluto';
console.log(typeof cambio);

cambio = 25;
console.log(typeof cambio);

cambio = false;
console.log(typeof cambio);

let numeroStrano = '45';
let numeroNormale = 12;
let altroNumeroNormale = 3;
console.log(numeroNormale + altroNumeroNormale + numeroStrano);

let indefinita;
console.log(indefinita); // undefined

let nulla = null;
console.log(nulla); // null

let operatore1 = 5;
let operatore2 = 8;
console.log(operatore1);

operatore1 += operatore2;

console.log(operatore1);

console.log(!(operatore1 === operatore2));

let numeroNumero = 3;
let numeroStringa = '3';

console.log(numeroNumero == numeroStringa);
console.log(numeroNumero === numeroStringa);

let anni = 20;
let risposta = anni >= 18 ? 'Sì' : 'No';
document.getElementById('risposta').innerHTML = risposta;
