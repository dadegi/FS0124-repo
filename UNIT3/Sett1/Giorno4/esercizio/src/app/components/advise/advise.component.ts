import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-advise',
    templateUrl: './advise.component.html',
    styleUrls: ['./advise.component.scss'],
})
export class AdviseComponent {
    posts: Post[] = [];
    advised: Post[] = [];
    included: number[] = [];

    constructor() {
        this.readPosts().then((data) => {
            this.posts = data;
            this.buildIndex();
            this.advisePosts();
        });
    }

    async readPosts() {
        const response = await fetch('http://localhost:3000/data');
        const data = await response.json();
        return data;
    }

    buildIndex() {
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * this.posts.length);
            if (this.included.includes(index)) {
                index = Math.floor(Math.random() * this.posts.length);
            }
            this.included.push(index);
        }
    }

    advisePosts() {
        for (let i = 0; i < this.included.length; i++) {
            let postIndex = this.included[i] - 1;
            this.advised.push(this.posts[postIndex]);
        }
    }
}
