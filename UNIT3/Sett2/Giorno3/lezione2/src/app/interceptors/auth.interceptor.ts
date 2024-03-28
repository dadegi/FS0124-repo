import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        console.log('Intercettazione della chiamata da authInterceptor');
        console.log('Richiesta originaria da Auth: ', request);

        if(request.url == 'https://reqres.in/api/users') {
            const newReq = request.clone({
            headers: request.headers.append('Auth', 'secretId').append('firma', 'xyz')
        });
        return next.handle(newReq).pipe(tap(event => {
            console.log('Richiesta modificata da Auth: ', newReq);
            console.log('Risposta della request da Auth: ', event);
        }));
        } else {
            return next.handle(request).pipe(tap(event => {
                console.log('Richiesta non modificata');
            }))
        }


    }
}
