var SuperUser = /** @class */ (function () {
    function SuperUser(_data) {
        this.data = _data;
    }
    SuperUser.prototype.printData = function () {
        return "".concat(this.data.name, " ").concat(this.data.surname);
    };
    SuperUser.prototype.printAdmin = function () {
        var listPrivileges = '';
        var person = "".concat(this.data.name, " ").concat(this.data.surname);
        for (var i = 0; i < this.data.privileges.length; i++) {
            var privilege = this.data.privileges[i];
            listPrivileges += "".concat(privilege, " ");
        }
        return "".concat(person, " con privilegi ").concat(listPrivileges);
    };
    return SuperUser;
}());
var utente = {
    name: 'Mario',
    surname: 'Rossi',
    eta: 25
};
var myAdmin = new SuperUser({
    name: 'Aldo',
    surname: 'Bianchi',
    eta: 35,
    privileges: ['read', 'write', 'modify'],
    level: 1
});
console.log("Il nome dell'Amministratore \u00E8 ".concat(myAdmin.printAdmin()));
console.log(typeof utente);
var newVar = 'Pippo';
console.log(newVar);
newVar = 15;
console.log(newVar);
