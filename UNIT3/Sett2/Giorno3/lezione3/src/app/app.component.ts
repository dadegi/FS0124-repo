import { Component, OnInit } from '@angular/core';
import { Photo } from './models/photo.interface';
import { PhotosService } from './services/photos.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    photos: Photo[] | undefined;
    sub!: Subscription;

    constructor(private photoSrv: PhotosService) {}

    ngOnInit(): void {
        this.readPhotos();
    }

    readPhotos() {
        this.sub = this.photoSrv.getPhotos().subscribe(
            (photos) => {
                this.photos = photos;
            },
            (err) => {
                alert(err);
            }
        );
    }

    delete(id: number, index: number) {
        this.sub = this.photoSrv.deletePhoto(id).subscribe(
            () => {
                this.photos?.splice(index, 1);
            },
            (err) => {
                alert(err);
            }
        );
    }

    add() {
        this.photoSrv.addFavorites();
    }
}
