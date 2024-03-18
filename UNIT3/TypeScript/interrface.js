var Discente = /** @class */ (function () {
    function Discente(_studente, _eta, _tecnologia) {
        this.studente = _studente;
        this.eta = _eta;
        this.tecnologia = _tecnologia;
    }
    Discente.prototype.getStudente = function () {
        return "".concat(this.studente, " di anni ").concat(this.eta);
    };
    Discente.prototype.getCorso = function () {
        return " sta frequentando il corso di ".concat(this.tecnologia);
    };
    Discente.prototype.completo = function () {
        return this.getStudente() + this.getCorso();
    };
    return Discente;
}());
var nuovoDiscente = new Discente('Mario Rossi', 25, 'Typescript');
console.log(nuovoDiscente.completo());
