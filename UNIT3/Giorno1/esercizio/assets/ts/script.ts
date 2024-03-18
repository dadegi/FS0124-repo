const userName = document.getElementById('name') as HTMLInputElement;
const userSurname = document.getElementById('surname') as HTMLInputElement;
const ricarica = document.getElementById('ricarica') as HTMLInputElement;
const numCall = document.getElementById('numCall') as HTMLInputElement;
const manage = document.getElementById('manage') as HTMLButtonElement;
const resetCalls = document.getElementById('reset') as HTMLButtonElement;
const manageUser = document.getElementById('manageUser') as HTMLHeadingElement;
let nome: string;
let cognome: string;
let charge: number;
let calls: number;

interface Smartphone {
	credito: number;
	numeroChiamate: number;
}

type dataUser = {
	name: string | undefined;
	surname: string | undefined;
};

class User implements Smartphone {
	data: dataUser;
	credito: number = 0;
	numeroChiamate: number = 0;

	constructor(_data: dataUser) {
		this.data = _data;
	}

	ricarica(amount: number): number {
		return (this.credito = this.credito + amount);
	}

	chiamata(numCall: number): void {
		if (this.credito < 0.2) {
			manageUser.innerText = 'Credito insufficiente';
			return;
		} else {
			this.numeroChiamate = this.numeroChiamate + numCall;
			this.credito = this.credito - 0.2 * numCall;
		}
	}

	chiama404(): number {
		return this.credito;
	}

	getNumeroChiamate(): number {
		return this.numeroChiamate;
	}

	azzeraChiamate(): void {
		this.numeroChiamate = 0;
	}
}

const newUser = new User({
	name: undefined,
	surname: undefined,
});

manage.addEventListener('click', function (e) {
	e.preventDefault();
	nome = userName.value;
	cognome = userSurname.value;
	charge = Number(ricarica.value);
	calls = Number(numCall.value);

	reset();

	setUser();
});

const reset = () => {
	ricarica.value = '';
	numCall.value = '';
};

const setUser = (): void => {
	newUser.data.name = nome;
	newUser.data.surname = cognome;

	newUser.ricarica(charge);
	newUser.chiamata(calls);

	printResult();
};

const printResult = (): void => {
	if (newUser.credito > 0.2) {
		manageUser.innerText = `L'utente ${newUser.data.name} ${
			newUser.data.surname
		} ha effettuato ${newUser.getNumeroChiamate()} chiamate; il suo credito residuo è € ${newUser.chiama404()}`;
	} else {
		return;
	}
};

resetCalls.addEventListener('click', function (e) {
	e.preventDefault();
	newUser.azzeraChiamate();
	manageUser.innerText = `L'utente ${newUser.data.name} ${
		newUser.data.surname
	} ha azzerato le chiamate; il suo credito residuo è € ${newUser.chiama404()}`;
	reset();
});
