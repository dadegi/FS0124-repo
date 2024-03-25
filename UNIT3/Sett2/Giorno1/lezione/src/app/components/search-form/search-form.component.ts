import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
    @Output() handleData = new EventEmitter<string>();
    @Output() handleError = new EventEmitter<boolean>()

    getData(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            let target = event.target as HTMLInputElement;
            if (target.value != '') {
                this.handleError.emit(false);
                this.handleData.emit(target.value);
            } else {
                this.handleError.emit(true);
                this.handleData.emit('Inserire un valore nel campo di ricerca');
            }

            target.value = '';
        }
    }
}
