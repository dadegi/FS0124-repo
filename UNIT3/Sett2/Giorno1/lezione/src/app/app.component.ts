import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'angular-easter';
    query = 'easter';
    error: boolean = false


    setQuery(data: {query: string, error: boolean}) {
        this.query = data.query;
        this.error = data.error;
    }
}
