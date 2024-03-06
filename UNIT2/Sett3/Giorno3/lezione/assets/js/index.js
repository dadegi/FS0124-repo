let promise = loadScript(
	'https://cdnjs.cloudflare.com/ajax/libs/bootrap/5.3.3/js/bootstrap.min.js'
);

promise.then(
	script => console.log(`Lo script ${script.src} è stato trovato`),
	error => console.log(`Errore: ${error.message}`)
);

function loadScript(src) {
	return new Promise((resolve, reject) => {
		let script = document.createElement('script');
		script.src = src;

		script.onload = () => resolve(script);
		script.onerror = () =>
			reject(new Error(`Errore di caricamento dello script ${src}`));

		document.head.append(script);
	});
}
