import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    users: User[] = [];
    user!: User | null;

    onAddUser(user: User) {
        this.users.push(user);
        this.user = user;
    }

}
