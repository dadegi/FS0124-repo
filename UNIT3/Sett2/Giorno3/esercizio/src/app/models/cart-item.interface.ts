import { Product } from "./product.interface";

export interface CartItem extends Product {
    amount: number;
    totalPrice: number;
}
