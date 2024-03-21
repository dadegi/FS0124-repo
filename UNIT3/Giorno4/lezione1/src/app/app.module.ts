import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PrimoComponent } from './components/primo/primo.component';
import { SecondoComponent } from './components/secondo/secondo.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'primo',
        component: PrimoComponent
    },
    {
        path: 'secondo',
        component: SecondoComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    SecondoComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
