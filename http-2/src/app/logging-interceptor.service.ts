import { HttpEventType, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggingInterceptorService {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Out going request');
    console.log(req.url);
    console.log(req.headers);
    return next.handle(req).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log('Incoming response');
          console.log(event.body);
        }
      })
    );
  }
  constructor() {}
}
