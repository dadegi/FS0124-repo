// Questa funzione carica qualcosa nell'HTML della pagina promise.html, a seguito di una richiesta HTTP e di una promise
function showPage(page) {
	document.getElementById('pagina').innerHTML = page;
}

// Questa funzione è la promise che cerca di recuperare il file da includere
const promise = new Promise(function (resolve, reject) {
	let request = new XMLHttpRequest(); // Richiesta HTTP...
	request.open('GET', 'include.html'); // ... di tipo GET, per cercare la risorsa indicata dopo la virgola (include.html)
	request.onload = function () {
		// Caricamento della richiesta
		if (request.status == 200) {
			// Una richiesta HTTP risponde con uno status code (lezione del 5/3); se lo status code è 200 vuol dire che la richiesta è andata a buon fine, quindi la promise è risolta (resolve)...
			resolve(request.response); // ... e legge la risposta della richiesta, cioè la risorsa trovata...
		} else {
			reject('<h3>FILE NON TROVATO!</h3>'); // ... altrimenti la promise NON È risolta (reject), e gestisce l'errore, in questo caso indicando nell'HTML l'errore
		}
	};
	request.send(); // La richiesta così definita parte verso il server
});

promise.then(
	// La promise eseguita con il metodo then gestisce i due possibili casi:
	function (value) {
		// 1. se la promise è risolta, il valore del resolve (riga 14) viene passato alla funzione showPage
		showPage(value);
	},
	function (error) {
		// 2.. se la promise non è risolta, il valore del reject (riga 16) viene passato alla funzione showPage
		showPage(error);
	}
);

document.getElementById('dimostrazione').innerText = 'Questa riga dimostra il funzionamento di un metodo asincrono come una promise: nonostante sia l\'ultima istruzione JavaScript, verrà eseguita indipendentemente dall\'esito della promise e DURANTE l\'esecuzione della promise.';
