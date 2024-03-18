var Phone = /** @class */ (function () {
    function Phone(_numero) {
        this.numero = _numero;
    }
    return Phone;
}());
var Utente = /** @class */ (function () {
    function Utente(_nome, _cognome, _numeri) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
    return Utente;
}());
var newUtente = new Utente('Mario', 'Rossi', [4857683, 586968437, 65849687]);
console.log(newUtente);
