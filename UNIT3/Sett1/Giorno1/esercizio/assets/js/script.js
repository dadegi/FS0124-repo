var userName = document.getElementById('name');
var userSurname = document.getElementById('surname');
var ricarica = document.getElementById('ricarica');
var numCall = document.getElementById('numCall');
var manage = document.getElementById('manage');
var resetCalls = document.getElementById('reset');
var manageUser = document.getElementById('manageUser');
var nome;
var cognome;
var charge;
var calls;
var User = /** @class */ (function () {
    function User(_data) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.data = _data;
    }
    User.prototype.ricarica = function (amount) {
        return (this.credito = this.credito + amount);
    };
    User.prototype.chiamata = function (numCall) {
        if (this.credito < 0.2) {
            manageUser.innerText = 'Credito insufficiente';
            return;
        }
        else {
            this.numeroChiamate = this.numeroChiamate + numCall;
            this.credito = this.credito - 0.2 * numCall;
        }
    };
    User.prototype.chiama404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var newUser = new User({
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
var reset = function () {
    ricarica.value = '';
    numCall.value = '';
};
var setUser = function () {
    newUser.data.name = nome;
    newUser.data.surname = cognome;
    newUser.ricarica(charge);
    newUser.chiamata(calls);
    printResult();
};
var printResult = function () {
    if (newUser.credito > 0.2) {
        manageUser.innerText = "L'utente ".concat(newUser.data.name, " ").concat(newUser.data.surname, " ha effettuato ").concat(newUser.getNumeroChiamate(), " chiamate; il suo credito residuo \u00E8 \u20AC ").concat(newUser.chiama404());
    }
    else {
        return;
    }
};
resetCalls.addEventListener('click', function (e) {
    e.preventDefault();
    newUser.azzeraChiamate();
    manageUser.innerText = "L'utente ".concat(newUser.data.name, " ").concat(newUser.data.surname, " ha azzerato le chiamate; il suo credito residuo \u00E8 \u20AC ").concat(newUser.chiama404());
    reset();
});
