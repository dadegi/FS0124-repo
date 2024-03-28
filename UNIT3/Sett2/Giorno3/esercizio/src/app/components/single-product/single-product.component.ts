import { Component, Input } from '@angular/core';
import { Product } from './../../models/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
    selector: 'app-single-product',
    templateUrl: './single-product.component.html',
    styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent {
    @Input() product!: Product

    constructor(private cartSrv: CartService, private favSrv: FavoritesService) {}

    addToCart(prod: Product) {
        this.cartSrv.addToCart(prod);
    }

    addToFavs(product: Product) {
        this.favSrv.addFavorite(product);
    }

    isFav(id: number) {
        return this.favSrv.isFav(id);
    }
}
