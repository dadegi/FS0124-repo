import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.interface';
import { Product } from '../models/product.interface';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: CartItem[] = [];
    newProd!: Product;
    myCart = new Subject<CartItem[]>();

    constructor() {}

    addToCart(prod: Product) {
        this.newProd = prod;
        const exist = this.cart.find(newProd => newProd.id === prod.id);
        if (exist) {
            exist.amount += 1;
            exist.totalPrice = exist.price * exist.amount;
        } else {
            this.cart.push({...prod, amount: 1, totalPrice: prod.price});
        }
        console.log(this.cart);
    }

    removeFromCart(id: number) {
        const index = this.cart.findIndex(prod => prod.id === id);
        if (this.cart[index].amount === 1) {
            this.cart.splice(index, 1);
        } else {
            this.cart[index].amount--;
            this.cart[index].totalPrice = this.cart[index].price * this.cart[index].amount;
        }
    }

    cartList() {
        this.myCart.next(this.cart);
    }
}
