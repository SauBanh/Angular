import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
// import { map } from 'rxjs';

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
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // console.log(postData);
    // this.http
    //   .post<{ name }>(
    //     'https://angular-1ae72-default-rtdb.firebaseio.com/posts.json',
    //     postData
    //   )
    //   .subscribe((responseData) => {
    //     console.log(responseData);
    //   });
    this.postsService.createAndStorePosts(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  // private fetchPosts() {
  //   this.isFetching = true;
  //   // this.http
  //   //   .get<{ [key: string]: Post }>(
  //   //     'https://angular-1ae72-default-rtdb.firebaseio.com/posts.json'
  //   //   )
  //   //   .pipe(
  //   //     map((responseData) => {
  //   //       const postArray: Post[] = [];
  //   //       for (const key in responseData) {
  //   //         if (responseData.hasOwnProperty(key)) {
  //   //           postArray.push({ ...responseData[key], id: key });
  //   //         }
  //   //       }
  //   //       return postArray;
  //   //     })
  //   //   )
  //   //   .subscribe((posts) => {
  //   //     // console.log(posts);
  //   //     this.loadedPosts = posts;
  //   //     this.isFetching = false;
  //   //   });

  // }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
