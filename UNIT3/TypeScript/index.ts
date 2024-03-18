class Studente {
    nome: string;
    cognome: string;

    constructor(_nome: string, _cognome: string) {
        this.nome = _nome;
        this.cognome = _cognome;
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome}`;
    }

    private numeroRandom(): number {
        return Math.floor(Math.random() * 11);
    }

    somma(num1: number): number {
        return num1 + this.numeroRandom();
    }
}

class Utente extends Studente {
    eta: number;

    constructor(_nome: string, _cognome: string, _eta: number) {
        super(_nome, _cognome);
        this.eta = _eta
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome} di anni ${this.eta}`;
    }
}

let nuovoStudente = new Studente('Mario', 'Rossi');
console.log(nuovoStudente.getStudente());
console.log(nuovoStudente.somma(15));

let nuovoUtente = new Utente('Aldo', 'Bianchi', 30);
console.log(nuovoUtente.getStudente());