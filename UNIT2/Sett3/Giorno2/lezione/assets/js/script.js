class Persona {
    constructor(_nome, _cognome, _dataNascita, _skills) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.dataNascita = {
            giorno: _dataNascita[0],
            mese: _dataNascita[1],
            anno: _dataNascita[2]
        }
        this.skills = _skills;
    }
}

let nuovo = new Persona('Mario', 'Rossi', [12,6,1991], ['HTML', 'JavaScript']);

console.log(nuovo);

localStorage.setItem('persona', JSON.stringify(nuovo));

let recupera = JSON.parse(localStorage.getItem('persona'));

console.log(recupera);