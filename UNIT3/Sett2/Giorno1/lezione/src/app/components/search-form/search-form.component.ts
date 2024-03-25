import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
    @Output() handleData = new EventEmitter<string>();

    getData(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            let target = event.target as HTMLInputElement;
            if (target.value != '') {
                this.handleData.emit(target.value);
            } else {
                this.handleData.emit('Inserire un valore nel campo di ricerca');
            }

            target.value = '';
        }
    }
}
