function Logger(constructor: typeof Persone) { // 5. Funzione avviata dal decoratore
    console.log('Logging...'); // 6. Primo log
    console.log(constructor.prototype.print()); // 7. Secondo log: riceve come parametro il constructor della classe, cioè la funzione di classe, lo stampa, DOPO esegue l'istanza di classe, perché il decoratore ha esaurito il suo compito
}

@Logger // 4. Decoratore collegato alla funzione col suo nome
class Persone { // 3. Classe istanziata e decorata
    name: string;
    
    constructor (_name: string) {
        this.name = _name;
        console.log('Creazione persona...'); // 8. L'istanza di classe esegue il metodo del costruttore della classe
    }

    print() {
        console.log(this.name);
    }
}

const myPerson = new Persone ('Mario Rossi'); // 2. Istanza di classe
console.log(myPerson);// 1. Chiamata all'istanza ci classe // 9. La proprietà di classe viene stampzata

// L'elemento decorato viene passato al decoratore PER INTERO
// Il decoratore utilizza l'elemento decorato PER INTERO
// Nel costructor di una classe decorata vanno inserite SOLTANTO le funzionalità che serviranno al decoratore: il constructor può anche contenere metodi, ma SOLO se funzionali al decoratore, cioè se devono essere eseguiti PRIMA dell'istanza di classe

// Documentazione ufficiale: https://www.typescriptlang.org/docs/handbook/decorators.html