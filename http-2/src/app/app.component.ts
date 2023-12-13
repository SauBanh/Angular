import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.module';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
    // this.isFetching = true;
    // this.postService.fetchPosts().subscribe(
    //   (posts) => {
    //     this.isFetching = false;
    //     this.loadedPosts = posts;
    //   },
    //   (error) => {
    //     this.error = error.message;
    //   }
    // );
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.error = error.message;
        console.log(error);
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
