class Persona {
	nome: string;
	cognome: string;

	constructor(_nome: string, _cognome: string) {
		this.nome = _nome;
		this.cognome = _cognome;
	}
}

let nuovo = new Persona('Paolino', 'Paperino');

console.log(nuovo);

const somma = (num1: number, num2: number): number => {
	let risultato = num1 + num2;
	return risultato;
};

console.log(somma(8, 15));
