let numero1 = 7;
let numero2 = 10;
let nome = 'Mario';
let cognome = 'Rossi';

document.addEventListener('load', init());

function init() {
    aggiungi(12);
    sottrazione(numero1, numero2);
    persona(nome, cognome);
}

function somma(num1, num2) {
    return num1 + num2;
}

function aggiungi(num1) {
    document.getElementById('risultato').innerText = num1 + somma(numero1, numero2);
}

function sottrazione(num1, num2) {
    if (num1 < num2) {
        document.getElementById('sottrazione').innerText = 'La funzione restituisce un risultato negativo';
        return;
    }
    document.getElementById('sottrazione').innerText = 'Il risultato della funzione è ' + (num1 - num2);
}

function persona(stringa1, stringa2) {
    document.getElementById('persona').innerText = stringa1 + ' ' + stringa2;
}

moltiplicazione = (numero1, numero2) => {
    document.getElementById('moltiplicazione').innerText = numero1 * numero2;
}

// function moltiplicazione(numero1, numero2) {
//     document.getElementById('moltiplicazione').innerText = numero1 * numero2;
// }

moltiplicazione(numero1, numero2);

// Verifica numeri codice fiscale

let codFis = 'DLGDRA67R20F839V'
let mioGiorno = '20';
let annoForm = '1967';
let mioAnno = annoForm.slice(2);
let genere = 'M';

const posGiorno = codFis.indexOf(mioGiorno, 7);
const posAnno = codFis.indexOf(mioAnno);
const giorno = codFis.slice(posGiorno, posGiorno + 2);
if (genere === 'F') {
    giorno = giorno - 40;
}
const anno = codFis.slice(posAnno, posAnno + 2);

console.log(giorno);
if (giorno === mioGiorno && anno === mioAnno) {
	console.log('Codice fiscale corretto');
} else {
    console.log('Codice fiscale non corretto');
}
