import { Component, Input } from '@angular/core';
import { Product } from './../../models/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-single-product',
    templateUrl: './single-product.component.html',
    styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent {
    @Input() product!: Product

    constructor(private cartSrv: CartService) {}

    addToCart(prod: Product) {
        this.cartSrv.addToCart(prod);
    }
}
