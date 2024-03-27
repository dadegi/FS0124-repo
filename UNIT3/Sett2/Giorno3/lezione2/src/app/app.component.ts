import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './models/user.interface';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'lezione2';

    sub!: Subscription;
    users: User[] | undefined;

    newUser: {
        first_name: string,
        last_name: string,
        email: string,
        avatar: string
    } = {
        first_name: '',
        last_name: '',
        email: '',
        avatar: ''
    }

    constructor(private usersSrv: UserService) {}

    ngOnInit(): void {
        this.reccoveryUsers();
    }

    reccoveryUsers() {
        this.sub = this.usersSrv.getUsers().subscribe((results) => {
            this.users = results;
        });
    }

    generateUser() {
        this.sub = this.usersSrv.createUser(this.newUser).subscribe((result) => {
            this.users?.push(result);
        });
    }

    deleteItem(id: number) {
        this.sub = this.usersSrv.deleteUser(id).subscribe(() => {
            const userDeleted = this.users?.find((user) => user.id == id);
            alert(`Utente ${userDeleted?.first_name} ${userDeleted?.last_name} cancellato!`);
            this.users = this.users?.filter((user) => user.id != id);
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
