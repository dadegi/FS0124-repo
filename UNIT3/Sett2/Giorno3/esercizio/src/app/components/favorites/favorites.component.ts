import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {

    myFavorites: Product[] = [];

    constructor(private favSrv: FavoritesService){}

    ngOnInit(): void {
        this.favSrv.favorites.subscribe((favorites: Product[]) => {
            this.myFavorites = favorites;
        });
    }

    deleteFavorite(id: number) {
        this.favSrv.removeFavorite(id);
    }
}
