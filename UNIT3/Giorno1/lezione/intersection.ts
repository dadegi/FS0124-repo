type User = {
    name: string;
    surname: string;
    eta: number;
}

type Admin = {
    privileges: string[];
    level: number;
}

type Elevated = User & Admin;

class SuperUser {
    data: Elevated

    constructor(_data: Elevated) {
        this.data = _data;
    }

    printData(): string {
        return `${this.data.name} ${this.data.surname}`;
    }

    printAdmin(): string {
        let listPrivileges: string = '';
        let person = `${this.data.name} ${this.data.surname}`;
        for (let i = 0; i < this.data.privileges.length; i++) {
            let privilege = this.data.privileges[i];
            listPrivileges += `${privilege} `;
        }
        return `${person} con privilegi ${listPrivileges}`;
    }
}

const utente: User = {
    name: 'Mario',
    surname: 'Rossi',
    eta: 25
}

const myAdmin = new SuperUser({
    name: 'Aldo',
    surname: 'Bianchi',
    eta: 35,
    privileges: ['read', 'write', 'modify'],
    level: 1
});

console.log(`Il nome dell'Amministratore è ${myAdmin.printAdmin()}`);

console.log(typeof utente);

type Tipo1 = string | number;
type Tipo2 = boolean | undefined;

type Intersecate = Tipo1 & Tipo2;

let newVar: Intersecate = 'Pippo';
console.log(newVar);

newVar = 15;
console.log(newVar);
