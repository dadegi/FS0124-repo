class User {
    constructor(_firstName, _lastName, _age, _locaation) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _locaation;
    }
}

const btnAggiungi = document.getElementById('aggiungi');
const users = [];

btnAggiungi.addEventListener('click', function(e) {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let eta = document.getElementById('eta').value;
    let citta = document.getElementById('location').value;

    let user = new User(nome, cognome, eta, citta);
    users.push(user);
    stampa();
});

function confronta(eta) {
    let thisEta = 0;
    users.forEach((user) => {
        if(thisEta < user.age) {
            thisEta = user.age;
        }
    });

    if(eta >= thisEta) {
        return ' è il più vecchio';
    } else {
        return '';
    }
}

function stampa() {
    console.log(users);
    let lista = document.getElementById('lista');
    lista.innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        let li = document.createElement('li');
        li.innerText = `${users[i].firstName} ${users[i].lastName} ${confronta(users[i].age)}`;
        lista.appendChild(li);
    }
}