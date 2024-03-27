import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    products!: Product[];
    sub!: Subscription;
    constructor(private prodSrv: ProductsService) {}
    ngOnInit(): void {
        this.sub = this.prodSrv.getProducts().subscribe(
            (res) => {
                this.products = res.products;
            },
            (error) => console.log(error)
        );
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
