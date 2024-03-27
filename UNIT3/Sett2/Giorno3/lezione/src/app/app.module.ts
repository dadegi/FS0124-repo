import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ObservableComponent } from './components/observable/observable.component';

const routes: Route[] = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'observable',
        component: ObservableComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
