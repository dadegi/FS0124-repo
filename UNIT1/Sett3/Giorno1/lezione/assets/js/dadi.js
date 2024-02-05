let numero1 = 0;
let numero2 = 0;

document.addEventListener('load', init());

function init() {
    lancio();
    stampa();
}

function lancio() {
    numero1 = Math.floor(Math.random() * 6 + 1);
    numero2 = Math.floor(Math.random() * 6 + 1);
    console.log(numero1 + numero2);

    if ((numero1 + numero2) % 2 === 0) lancio();

    document.getElementById('lancio1').innerText = 'Il lancio del primo dado è ' + numero1;
    document.getElementById('lancio2').innerText = 'Il lancio del secondo dado è ' + numero2;
}

function verifica() {
    let somma = numero1 + numero2;
    document.getElementById('somma').innerText += somma;
    if (somma % 2 === 0) {
        init();
        // return true;
    } else {
        return false;
    }
}

function stampa() {
    let risultato = document.getElementById('risultato');
    let riga = document.createElement('h4');
    if (verifica()) {
        riga.setAttribute('id', 'vittoria');
        riga.innerText = 'HAI VINTO';
    } else {
        cancella(riga);
        riga.setAttribute('id', 'sconfitta');
        riga.innerText = 'HAI PERSO';
    }
    risultato.appendChild(riga);
}

function cancella(riga) {
    riga.innerText = '';
}
