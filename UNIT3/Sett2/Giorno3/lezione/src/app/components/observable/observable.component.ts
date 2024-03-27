import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html',
    styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit, OnDestroy {
    sub!: Subscription;
    count: number = 0;

    ngOnInit(): void {
        const intervallo = new Observable((observer) => {
            let increment = 0;
            setInterval(() => {
                observer.next(increment);
                if (increment === 5) {
                    observer.complete();
                    console.log('Observer completato');
                }
                // if (increment > 3) {
                //     observer.error(new Error('Increment è troppo grande'));
                // }
                increment++;
            }, 1000);
        });
        this.sub = intervallo
            .pipe(
                map((conta) => {
                    this.count = Number(conta);
                    return `Siamo al numero ${conta}`;
                })
            )
            .subscribe(
                (numero) => {
                    console.log(numero);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log('Observable completato');
                }
            );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
        console.log('Observable scaricato');
    }
}
