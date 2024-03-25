import { Component } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Lista utenti';
    // users: User[] = [];
    // user!: User | null;

    // constructor(private router: Router) {}

    // onAddUser(user: User) {
    //     this.users.push(user);
    //     this.user = user;
    // }
}
