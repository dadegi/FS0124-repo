import { Product } from "./product.interface";

export interface Products {
    products: Product[],
    total: number,
    skip: number,
    limit: number
}
