import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Lista utenti';
    users: User[] = [];
    user!: User | null;

    onAddUser(user: User) {
        this.users.push(user);
        this.user = user;
    }
}
