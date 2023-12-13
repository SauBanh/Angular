import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // console.log(postData);
    this.http
      .post<{ name: string }>(
        'https://review-angular-1eedb-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get<{ [key: string]: Post }>(
        'https://review-angular-1eedb-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        this.loadedPosts = posts;
      });
  }
}
