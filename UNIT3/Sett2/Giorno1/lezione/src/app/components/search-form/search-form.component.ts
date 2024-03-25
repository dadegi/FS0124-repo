import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
    @Output() handleData = new EventEmitter<{query: string, error: boolean}>();

    getData(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            let target = event.target as HTMLInputElement;
            if (target.value != '') {
                this.handleData.emit({query: target.value, error: false});
            } else {
                this.handleData.emit({query: 'Inserire un valore nel campo di ricerca', error: true});
            }

            target.value = '';
        }
    }
}
