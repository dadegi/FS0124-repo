// Variabili globali per gli elementi HTML
const form = document.getElementById('form');
const nome = document.getElementById('nome');
const cognome = document.getElementById('cognome');
const email = document.getElementById('email');
const password = document.getElementById('password');
const telefono = document.getElementById('telefono');
const eta = document.getElementById('eta');
const btnSubmit = document.getElementById('invia');
const errore = document.getElementById('errore');
const divGrazie = document.getElementById('grazie');

// Booleani per verifica la validità dei singoli campi controllati
let validCognome = false;
let validEmail = false;
let validTelefono = false;
let validPassword = false;

// Oggetto che conterrà i dati del form
const persona = {
	nome: '',
	cognome: '',
	email: '',
	password: '',
	telefono: '',
	eta: 0,
};

// RegExp di verifica
const regexCognome = /^[a-zA-ZÀ-ÿ' ]+$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&?])[A-Za-z\d!@#$%&?]{8,20}$/;

window.addEventListener('load', init());

// Al caricamento del documento disabilitare il button, finché il form non sarà valido
function init() {
	btnSubmit.setAttribute('disabled', 'true');
    divGrazie.style.display = 'none';
}

// Ad ogni perdita di focus, i campi verificano la loro validità
cognome.addEventListener('blur', function () {
    validCognome = false;
    verifica();
	if (cognome.value == '') {
		errore.innerText = 'Il campo cognome è obbligatorio';
	} else if (!regexCognome.test(cognome.value)) {
		errore.innerText = 'Il cognome deve essere composto da sole lettere';
	} else {
		errore.innerText = '';
		validCognome = true;
        verifica();
	}
});

telefono.addEventListener('blur', function () {
    validTelefono = false;
    verifica();
	if (telefono.value == '') {
		errore.innerText = 'Il campo telefono è obbligatorio';
	} else if (isNaN(telefono.value)) {
		errore.innerText =
			'Il numero di cellulare deve essere composto da soli numeri';
	} else {
		errore.innerText = '';
		validTelefono = true;
        verifica();
	}
});

email.addEventListener('blur', function () {
    validEmail = false;
    verifica();
	if (email.value == '') {
		errore.innerText = 'Il campo email è obbligatorio';
	} else if (!regexEmail.test(email.value)) {
		errore.innerText = 'Inserire una email valida';
	} else {
		errore.innerText = '';
		validEmail = true;
        verifica();
	}
});

password.addEventListener('blur', function () {
    validPassword = false;
    verifica();
	if (password.value == '') {
		errore.innerText = 'Il campo password è obbligatorio';
	} else if (!regexPassword.test(password.value)) {
		errore.innerText =
			'Inserire una password tra 8 e 20 caratteri che contenga almeno una lettera maiuscola, almeno una lettera minuscola, almeno un numero e almeno un carattere tra !@#$%&?';
	} else {
		errore.innerText = '';
		validPassword = true;
        verifica();
	}
});

// Questa funzione viene chiamata ogni volta che un campo è valido: se tutti sono validi, riabilita il button
function verifica() {
	if (validCognome && validEmail && validPassword && validTelefono) {
		btnSubmit.removeAttribute('disabled');
	} else {
        btnSubmit.setAttribute('disabled', 'true');
    }
}

// Al click del button comincia l'azione del form
btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('form inviato');
    let nomeForm = nome.value;
    let cognomeForm = cognome.value;
    let emailForm = email.value;
    let passwordForm = password.value;
    let etaForm = eta.value;
    let telefonoForm = telefono.value;

    persona.nome = nomeForm;
    persona.cognome = cognomeForm;
    persona.email = emailForm;
    persona.password = passwordForm;
    if (etaForm > 0) {
        persona.eta = etaForm;
    }
    persona.telefono = telefonoForm;

    console.log(persona);

    divGrazie.style.display = 'block';

    document.getElementById('nomeForm').innerText += persona.nome;
    document.getElementById('cognomeForm').innerText += persona.cognome;
    document.getElementById('emailForm').innerText += persona.email;
    document.getElementById('passwordForm').innerText += persona.password;
    document.getElementById('etaForm').innerText += persona.eta;
    document.getElementById('telefonoForm').innerText += persona.telefono;

    form.reset();
});
