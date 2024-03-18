class Phone {
    numero: number;
    constructor(_numero: number) {
        this.numero = _numero;
    }
}

class Utente {
    nome: string;
    cognome: string;
    numeri: Phone[];
    constructor(_nome: string, _cognome: string, _numeri: any) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
}

let newUtente = new Utente('Mario', 'Rossi', [4857683, 586968437, 65849687]);

console.log(newUtente);