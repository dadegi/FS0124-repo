var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Operazione = /** @class */ (function () {
    function Operazione(_numero1, _numero2) {
        this.operatore = 3;
        this.numero1 = _numero1;
        this.numero2 = _numero2;
    }
    // Incapsulamento (metodo private)
    Operazione.prototype.interno = function () {
        console.log(this.numero1, this.numero2);
        return this.numero1 + this.numero2;
    };
    Operazione.prototype.result = function () {
        return this.interno() * this.operatore;
    };
    return Operazione;
}());
// Ereditarietà (extends)
var Prodotto = /** @class */ (function (_super) {
    __extends(Prodotto, _super);
    function Prodotto(_numero1, _numero2) {
        return _super.call(this, _numero1, _numero2) || this;
    }
    // Polimorfismo (metodo della superclasse modificato)
    Prodotto.prototype.result = function () {
        return this.numero1 + this.numero2;
    };
    return Prodotto;
}(Operazione));
var newOperazione = new Operazione(3, 5);
console.log('Risultato istanza SuperClasse: ', newOperazione.result());
newOperazione.numero1 = 4;
newOperazione.numero2 = 1;
console.log('Risultato istanza SuperClasse modificata: ', newOperazione.result());
var nuovaSomma = new Prodotto(7, 3);
console.log('Risultato istanza SottoClasse: ', nuovaSomma.result());
