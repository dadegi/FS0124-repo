import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent {

    postId!: number;
    post!: Post;

    constructor(private route: ActivatedRoute) {
        this.postId = Number(this.route.snapshot.params['id']);
        this.getPost().then((data) => {
            this.post = data;
            console.log(this.post);
        });
    }

    async getPost() {
        const response = await fetch(`http://localhost:3000/data/${this.postId}`);
        const data = await response.json();
        return data;
    }

    async editPost() {
        let newPost: Post = {
            title: this.post.title,
            body: this.post.body
        }
        await fetch(`http://localhost:3000/data/${this.postId}`, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(newPost)
        });
    }

}
