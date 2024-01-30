// Dichiarazione e definizione di un oggetto
const studente = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 25,
    classe: 'FS0124',
    webcam: false
}

// Un oggetto potrebbe anche essere definito inzialmente vuoto, metodologia deprecata
const nuovoOggetto = {};

// Stampa oggetto  video e in console - *** LA CONSOLE MOSTRERÀ SEMPRE LO STATO ULTIMO DELL'OGGETTO, QUINDI CON EVENTUALI MODIFICHE
console.log(studente);

document.getElementById('oggetto').innerHTML = studente;

// Destrutturazione di un oggetto
document.getElementById('nome').innerHTML = studente.nome;
document.getElementById('cognome').innerHTML = studente.cognome;
document.getElementById('eta').innerHTML = studente['eta'];
document.getElementById('classe').innerHTML = studente.classe;
document.getElementById('webcam').innerHTML = studente['webcam'];

// Modifica e stampa dell'oggetto
studente.cognome = 'Bianchi';
studente.webcam = true;

document.getElementById('nome2').innerHTML = studente.nome;
document.getElementById('cognome2').innerHTML = studente.cognome;
document.getElementById('eta2').innerHTML = studente['eta'];
document.getElementById('classe2').innerHTML = studente.classe;
document.getElementById('webcam2').innerHTML = studente['webcam'];

console.log(studente);

// Aggiunta di proprietà a un oggetto
studente.email = 'pippo@pippo.com';

console.log(studente);

// Eliminazione di proprietà da un oggetto
delete studente.webcam;

console.log(studente);

// Creazione nuovi oggetti a partire dall'oggetto principale
const studente2 = studente; // Con l'operatore ddi assegnazione, viene creato un clone bidirezionale, quindi ogni cambiamento in studente2 avrà effetto anche su studente - DEPRECATO!

// Metodi corretti di copia di un oggetto in un altro
const studente3 = Object.assign(studente); // Metodo di assegnazione delle caratteristiche di un oggetto a un altro oggetto
// ATTENZIONE!!! L'oggetto diventa un modulo, che sarà gestito in un altro modo

const studente4 = {...studente}; // Spread operator - Metodo preferito perché crea una copioa dell'oggetto senza inataccare le caratteristiche né dell'oggetto originario né del nuovo oggetto

studente4.nome = 'Aldo';
studente4.email = 'pluto@pluto.com';

console.log(studente);
console.log(studente4);