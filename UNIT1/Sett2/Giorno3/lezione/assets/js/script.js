let mese = new Date().getMonth();
let anno = new Date().getFullYear();
let meseCorrente;

console.log(mese);

// if (mese === 0) {
//     meseCorrente = 'Gennaio';
// } else if (mese === 1) {
//     meseCorrente = 'Febbraio';
// } else if (mese === 2) {
//     meseCorrente = 'Marzo';
// } else if (mese === 3) {
//     meseCorrente = 'Aprile';
// } else if (mese === 4) {
//     meseCorrente = 'Maggio';
// } else if (mese === 5) {
//     meseCorrente = 'Giugno';
// } else if (mese === 6) {
//     meseCorrente = 'Luglio';
// } else if (mese === 7) {
//     meseCorrente = 'Agosto';
// } else if (mese === 8) {
//     meseCorrente = 'Settembre';
// } else if (mese === 9) {
//     meseCorrente = 'Ottobre';
// } else if (mese === 10) {
//     meseCorrente = 'Novembre';
// } else if (mese === 11) {
//     meseCorrente = 'Dicembre';
// }

switch (mese) {
	case 0:
		meseCorrente = 'Gennaio ' + anno;
		break;
	case 1:
		meseCorrente = 'Febbraio ' + anno;
		break;
	case 2:
		meseCorrente = 'Marzo ' + anno;
		break;
	case 3:
		meseCorrente = 'Aprile ' + anno;
		break;
	case 4:
		meseCorrente = 'Maggio ' + anno;
		break;
	case 5:
		meseCorrente = 'Giugno ' + anno;
		break;
	case 6:
		meseCorrente = 'Luglio ' + anno;
		break;
	case 7:
		meseCorrente = 'Agosto ' + anno;
		break;
	case 8:
		meseCorrente = 'Settembre ' + anno;
		break;
	case 9:
		meseCorrente = 'Ottobre ' + anno;
		break;
	case 10:
		meseCorrente = 'Novembre ' + anno;
		break;
	default:
		meseCorrente = 'Dicembre '  + anno;
		break;
}

document.getElementById('meseCorrente').innerHTML += meseCorrente; // Con l'operatore += si concatena il testo inserito da Javascript al testo già presente in html

let x = 19;
let y = 12;
let z = 25;
let sequenza = document.getElementById('sequenza');

switch (true) {
	case (x > y && y > z):
		sequenza.innerHTML = x + ', ' + y + ', ' + z;
		break;
	case (x > z && z > y):
		sequenza.innerHTML = x + ', ' + z + ', ' + y;
		break;
	case (y > x && x > z):
		sequenza.innerHTML = y + ', ' + x + ', ' + z;
		break;
	case (y > z && z > x):
		sequenza.innerHTML = y + ', ' + z + ', ' + x;
		break;
	case (z > x && x > y):
		sequenza.innerHTML = z + ', ' + x + ', ' + y;
		break;
	case (z > y && y > x):
		sequenza.innerHTML = z + ', ' + y + ', ' + x;
		break;
}

// if (x > y) {
// 	if (z > x) {
// 		arrayOrdina.innerHTML = z + ', ' + x + ', ' + y;
// 	} else {
// 		if (z > y) {
// 			arrayOrdina.innerHTML = x + ', ' + z + ', ' + y;
// 		} else {
// 			arrayOrdina.innerHTML = x + ', ' + y + ', ' + z;
// 		}
// 	}
// } else {
// 	if (z > y) {
// 		arrayOrdina.innerHTML = z + ', ' + y + ', ' + x;
// 	} else {
// 		if (z > x) {
// 			arrayOrdina.innerHTML = y + ', ' + z + ', ' + x;
// 		} else {
// 			arrayOrdina.innerHTML = y + ', ' + x + ', ' + z;
// 		}
// 	}
// }
