import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    cartList!: CartItem[];
    total!: number;

    constructor(private cartSrv: CartService) {}

    ngOnInit(): void {
        this.cartSrv.myCart.subscribe((cart) => {
            this.cartList = cart;
            console.log(this.cartList);
        });
    }

    totalPrice() {
        return this.cartList.reduce((previous, current) => previous + current.totalPrice, 0);
    }

    delete(id: number) {
        this.cartSrv.removeFromCart(id);
    }
}
