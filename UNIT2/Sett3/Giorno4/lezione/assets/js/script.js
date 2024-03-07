function read() {
	// Parte per prima, chiamata a riga 12
	console.log('Pronta la funzione read()!'); // 1
	let esempio = fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			console.log("codice eseguito all'interno del then()"); // 6
			return response.json();
		})
		.then(data => {
			let elenco = data;
			console.log('Risposta della fetch con il then chaining: ', elenco); // 7
		});
	console.log('Quando verrà stampato questo testo? Dopo la fetch? NO '); // 2
}

read();
console.log(
	'Quando verrà stampato questo testo? Dopo tutta la funzione read? NO'
); // 3

async function otherRead() {
	// Parte per seconda, chiamata a riga 22
	try {
		console.log('Pronta la funzione otherRead()!'); // 4
		let esempio = await fetch('https://jsonplaceholder.typicode.com/users');
		let risposta = await esempio.json();
		console.log('Risposta della fetch async/await: ', risposta); // 8
		console.log(
			"codice eseguito all'interno di async, stampato per ultimo" // 9
		); 
	} catch (error) {
		console.log('Errore: ', error);
        location.href = '404.html';
	}
}

otherRead();
console.log("codice eseguito all'esterno di async, stampato per primo"); // 5
