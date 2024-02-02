/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    let area = l1 * l2;
    return area;
}

console.log('***Esercizio 1***');
console.log(area(3, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
    if (n1 === n2) {
        return (n1 + n2) * 3;
    } else {
        return n1 + n2;
    }
}

console.log('***Esercizio 2***');
console.log(crazySum(2, 2));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num1) {
    if (num1 > 19) {
        return Math.abs(num1 - 19) * 3;
    } else {
        return Math.abs(num1 - 19);
    }
}

console.log('***Esercizio 3***');
console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if (n >=20 && n <= 100 || n === 400) {
        return true;
    } else {
        return false;
    }
}

console.log('***Esercizio 4***');
console.log(boundary(12));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
    if (stringa.startsWith('EPICODE ')) {
        return stringa;
    } else {
        return 'EPICODE ' + stringa;
    }
}

console.log('***Esercizio 5***');
console.log(epify('EPICODE FS0124'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numero) {
    if (numero % 3 === 0) {
        return 'È un multiplo di tre'
    } else if (numero % 7 === 0) {
        return 'È un multiplo di 7';
    } else {
        return 'Non è un multiplo né di 3 né di sette';
    }
}

console.log('***Esercizio 6***');
console.log(check3and7(25));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
    let arrayStringa = stringa.split('');
    let arrayInvertito = arrayStringa.reverse();
    let stringaFinale = arrayInvertito.join('');
    return stringaFinale;
}

console.log('***Esercizio 7***');
console.log(reverseString('Pippo'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringa) {
    let parole = stringa.split(' ');
    let risultato = [];
    for (let i = 0; i < parole.length; i++) {
        let primoCarattere = parole[i].charAt(0);
        let maiuscolo = primoCarattere.toUpperCase();
        let taglia = parole[i].slice(1);
        let parolaFinale = maiuscolo + taglia;
        risultato.push(parolaFinale);
    }
    return risultato.join(' ');
}

console.log('***Esercizio 8***');
console.log(upperFirst('esercizio javascript giorno quattro'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa) {
    return stringa.slice(1, stringa.length - 1);
}

console.log('***Esercizio 9***');
console.log(cutString('front-end'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(numero) {
    const mioArray = [];
    for (let i = 0; i < numero; i++) {
        mioArray.push(Math.floor(Math.random() * 11));
    }
    return mioArray;
}

console.log('***Esercizio 10***');
console.log(giveMeRandom(6));
