import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private apiURL: string = 'https://reqres.in/api/users';

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http
            .get<{ data: User[] }>(this.apiURL)
            .pipe(map((users) => users.data));
    }

    createUser(newUser: Partial<User>) {
        return this.http.post<User>(this.apiURL, newUser);
    }

    deleteUser(id: number) {
        return this.http.delete(`${this.apiURL}/${id}`);
    }
}
