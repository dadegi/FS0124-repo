const arrayNomi = ['Mario', 'Aldo', 'Nicola', 'Anna', 'Maria'];

document.getElementById('array1').innerText = arrayNomi;

// pop, push, shift, unshift

let eliminato = arrayNomi.pop();

document.getElementById(
	'eliminato'
).innerText = `Elemento eliminato: ${eliminato}`;
document.getElementById('array2').innerText = `Nuovo array: ${arrayNomi}`;

arrayNomi.push('Marco', 'Sabrina', 'Massimiliano');
document.getElementById('array3').innerText = `Nuovo array: ${arrayNomi}`;

let eliminato2 = arrayNomi.shift();

document.getElementById(
	'eliminato2'
).innerText = `Elemento eliminato: ${eliminato2}`;
document.getElementById('array4').innerText = `Nuovo array: ${arrayNomi}`;

arrayNomi.unshift('Alexandru', 'Fabio', 'Martina');
document.getElementById('array5').innerText = `Nuovo array: ${arrayNomi}`;

// splice

let nuovoArrayNomi = arrayNomi.splice(2, 2);
document.getElementById('array6').innerText = `Nuovo array: ${arrayNomi}`;
document.getElementById(
	'arraySplice1'
).innerText = `Array generato da splice: ${nuovoArrayNomi}`;

let nuovoArrayNomi2 = arrayNomi.splice(2, 1, 'Matteo', 'Lucian');
document.getElementById('array7').innerText = `Nuovo array: ${arrayNomi}`;
document.getElementById(
	'arraySplice2'
).innerText = `Array generato da splice: ${nuovoArrayNomi2}`;

arrayNomi.splice(4, 2);
document.getElementById('array8').innerText = `Nuovo array: ${arrayNomi}`;

// slice
let fettaArray = arrayNomi.slice(2, 5);
document.getElementById('array9').innerText = `Array originario: ${arrayNomi}`;
document.getElementById(
	'arraySlice'
).innerText = `Array generato da slice: ${fettaArray}`;

// forEach
const arrayNumeri = [1, 2, 3, 4, 5];
const listaNumeri = document.getElementById('listaNumeri');

const nuovoArrayNumeri = arrayNumeri.forEach((element, index) => { // Il nuovo array non verrebbe generato perché forEach esegue istruzioni ma NON genera un nuovo array
// arrayNumeri.forEach((element) => { // Questa è la sintassi corretta del forEach
    nuovoNumero = element + 10;
    let newLi = document.createElement('li');
    newLi.innerText = `${nuovoNumero}, indice ${index}`;
    listaNumeri.appendChild(newLi);
    // return nuovoNumero; // questo return non restituirebbe nulla, per le caratteristiche del metodo forEach
});

// Stessa operazione con il ciclo for
// for (let i = 0; i < arrayNumeri.length; i++) {
//     nuovoNumero = element + 10;
//     let newLi = document.createElement('li');
//     newLi.innerText = nuovoNumero;
//     listaNumeri.appendChild(newLi);
// }

document.getElementById('array14').innerText = `Array originario: ${arrayNumeri}`;
document.getElementById('array10').innerText = `Nuovo array numeri: ${nuovoArrayNumeri}`;

// map
const arrayNumeri2 = [1, 2, 3, 4, 5];
const listaNumeri2 = document.getElementById('listaNumeri2');
const nuovoArrayNumeri2 = arrayNumeri.map((element, index) => {
    nuovoNumero = element + 10;
    let newLi = document.createElement('li');
    newLi.innerText = `${nuovoNumero}, indice ${index}`;
    listaNumeri2.appendChild(newLi);
    return nuovoNumero; // Questo return popola il nuovo array creato dal metodo map
});


document.getElementById('array11').innerText = `Array originario: ${arrayNumeri2}`;
document.getElementById('array12').innerText = `Nuovo array generato da map: ${nuovoArrayNumeri2}`;

const arrayPrezzi = [12, 25, 57, 42, 31, 68];
const arrayIndici = [];

const speseSpedizione = arrayPrezzi.filter((element, index) => {
    if (element < 40) {
        arrayIndici.push(index); // Ho bisogno delle posizioni degli elementi filtrati
    }
    return element < 40; // Genero un array con solo i valori minori di 40
});

const carrello = arrayPrezzi.map((element, index) => {
    for (i = 0; i < arrayIndici.length; i++) { // Se la posizione nell'arrayPrezzi CORRISPONDE all'indice nell'arrayIndici, il prezzo deve essere maggiorato di 10
        // Adesso ho arrayIndici = [0, 1, 4], speseSpedizione = [12, 25, 31] che sono nelle posizioni indicate dall'arrayIndici
        if (index === arrayIndici[i]) {
            element = speseSpedizione[i] + 10;
        }
    }
    return element;
})

document.getElementById('array13').innerText = `Prezzi netti: ${arrayPrezzi}`;
document.getElementById('array16').innerText = `Prezzi da maggiorare: ${speseSpedizione}`;
document.getElementById('array15').innerText = `Carrello finale: ${carrello}`;
