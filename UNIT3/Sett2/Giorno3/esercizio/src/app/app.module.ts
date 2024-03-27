import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { CartComponent } from './components/cart/cart.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleProductComponent,
    EllipsisPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
