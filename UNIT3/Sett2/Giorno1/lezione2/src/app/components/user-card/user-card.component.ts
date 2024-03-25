import {
    Component,
    Input,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    SimpleChanges,
    OnDestroy,
} from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    // user-card-component RICEVE in input i dati dal componente parent (app component)
    @Input('data') element!: User;

    constructor() {
        console.log('constructor attivato');
    }

    ngOnInit(): void {
        console.log('ngOnInit attivato');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges attivato');
    }

    ngDoCheck(): void {
        console.log('ngDoCheck attivato');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit attivato');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked attivato');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit attivato');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked attivato');
    }

    ngOnDestroy(): void {
        alert('Scaricamento del component');
        console.log('ngOnDestroy attivato');
    }
}
