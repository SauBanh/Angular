import { Component } from '@angular/core';
// import { Observable, Subscription, interval } from 'rxjs';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private firstObsSubscription: Subscription;
  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    // const customIntervalObservable = Observable.create((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // });

    // customIntervalObservable.subscribe((data) => {
    //   console.log(data);
    // });
    let count = 0;
    const customInternalObservable = new Observable<number>((observer) => {
      setInterval(() => {
        observer.next(count++);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
      }, 1000);
    });

    this.firstObsSubscription = customInternalObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          // console.log('Round: ' + (data + 1));
          console.log(data);
        },
        (err) => {
          console.log(err);
          alert(err.message);
        },
        () => {
          console.log('Completed');
        }
      );
  }
  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
