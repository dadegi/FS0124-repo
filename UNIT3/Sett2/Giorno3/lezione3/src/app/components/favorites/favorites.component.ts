import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
    totFavorites: number = 0;

    constructor(private photoSrv: PhotosService) {}

    ngOnInit(): void {
        this.photoSrv.favoritesSub.subscribe((count) => {
            this.totFavorites = count;
        });
    }
}
