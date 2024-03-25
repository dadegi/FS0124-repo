import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
    declarations: [AppComponent, NewUserComponent, UserCardComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
