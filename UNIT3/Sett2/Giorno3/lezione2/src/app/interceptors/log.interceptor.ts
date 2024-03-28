import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        console.log('Intercettazione della chiamata da logInterceptor');
        console.log('Richiesta originaria da Log: ', request);
        if (request.url == 'https://reqres.in/api/users') {
            const newReq = request.clone({
                headers: request.headers
                    .append('Log', 'apiKEY')
                    .append('user', 'Pippo')
                    .append('host', 'rapidapi.host'),
            });
            return next.handle(newReq).pipe(
                tap((event) => {
                    console.log('Richiesta modificata da Log: ', newReq);
                    console.log('Risposta della request da Log: ', event);
                })
            );
        } else {
            return next.handle(request).pipe(
                tap((event) => {
                    console.log('Richiesta non modificata');
                })
            );
        }
    }
}
