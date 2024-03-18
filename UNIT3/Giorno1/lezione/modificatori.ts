class Operazione {
    numero1: number;
    numero2: number;
    readonly operatore: number = 3;

    constructor (_numero1: number, _numero2: number) {
        this.numero1 = _numero1;
        this.numero2 = _numero2;
    }

    // Incapsulamento (metodo private)
    private interno(): number {
        console.log(this.numero1, this.numero2);
        return this.numero1 + this.numero2;
    }

    result(): number {
        return this.interno() * this.operatore;
    }
}

// Ereditarietà (extends)
class Prodotto extends Operazione {
    
    constructor (_numero1: number, _numero2: number) {
        super(_numero1, _numero2)
    }

    // Polimorfismo (metodo della superclasse modificato)
    result(): number {
        return this.numero1 + this.numero2;
    }
}

const newOperazione = new Operazione(3, 5);

console.log('Risultato istanza SuperClasse: ', newOperazione.result());

newOperazione.numero1 = 4;
newOperazione.numero2 = 1;

console.log('Risultato istanza SuperClasse modificata: ', newOperazione.result());

const nuovaSomma = new Prodotto(7, 3);

console.log('Risultato istanza SottoClasse: ', nuovaSomma.result());
