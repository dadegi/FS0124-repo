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
        this.evidencePost().then((data) => {
            this.posts = data;
            let index = Math.floor(Math.random() * this.posts.length);
            this.post = this.posts[index];
        });
    }

    async evidencePost() {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();
        return data;
    }
}
