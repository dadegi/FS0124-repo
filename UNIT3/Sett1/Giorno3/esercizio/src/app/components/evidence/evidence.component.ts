import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-evidence',
    templateUrl: './evidence.component.html',
    styleUrls: ['./evidence.component.scss'],
})
export class EvidenceComponent {
    post!: Post;
    posts!: Post[];

    constructor() {
        this.evidencePost();
    }

    async evidencePost() {
        const response = await fetch('../../assets/db.json');
        const data = await response.json();
        this.posts = data;
        let index = Math.floor(Math.random() * this.posts.length);
        this.post = this.posts[index];
    }
}
