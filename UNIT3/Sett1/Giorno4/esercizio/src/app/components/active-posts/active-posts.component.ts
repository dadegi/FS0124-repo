import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
    posts: Post[] = [];

    constructor() {
        this.getActivePosts().then((data) => {
            this.posts = data;
        });
    }

    async getActivePosts() {
        const response = await fetch('http://localhost:3000/data');
        const data = (await response.json()) as Array<Post>;
        return data.filter((post) => post.active);
    }
}
