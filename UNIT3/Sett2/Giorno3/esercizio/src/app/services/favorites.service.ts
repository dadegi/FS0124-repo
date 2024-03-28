import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FavoritesService {

    myFavorites: Product[] = [];
    favorites = new BehaviorSubject<Product[]>([]);

    constructor() {}

    addFavorite(product: Product) {
        const exist = this.myFavorites.find(present => present.id === product.id);
        if(!exist) {
            this.myFavorites.push(product);
            this.favoritesList();
        }
    }

    removeFavorite(id: number) {
        const index = this.myFavorites.findIndex(product => product.id === id);
        this.myFavorites.splice(index, 1);
        this.favoritesList();
    }

    isFav(id: number) {
        return this.myFavorites.find(favorite => favorite.id === id);
    }

    favoritesList() {
        this.favorites.next(this.myFavorites);
    }
}
