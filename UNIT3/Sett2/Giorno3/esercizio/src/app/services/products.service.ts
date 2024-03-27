import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private apiURL: string = "https://dummyjson.com/products"

    constructor(private http: HttpClient) {}

    getProducts() {
        return this.http.get<Products>(this.apiURL);
    }
}
