import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { NuovoComponent } from './components/nuovo/nuovo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'nuovo',
        component: NuovoComponent
    }
]

@NgModule({
    declarations: [AppComponent, NewUserComponent, UserCardComponent, NuovoComponent, HomeComponent],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
