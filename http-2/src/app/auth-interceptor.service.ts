// import { HttpEventType, HttpHandler, HttpRequest } from '@angular/common/http';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService {
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   console.log('Request is on its way');
  //   console.log(req.url);
  //   const modifiedRequest = req.clone({
  //     headers: req.headers.append('Auth', 'NguyenTuanAnh'),
  //   });
  //   // return next.handle(req);
  //   return next.handle(modifiedRequest).pipe(
  //     tap((event) => {
  //       console.log(event);
  //       if (event.type === HttpEventType.Response) {
  //         console.log('Response arrived, body data: ');
  //         console.log(event.body);
  //       }
  //     })
  //   );
  // }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'NguyenTuanAnh'),
    });
    // return next.handle(req);
    return next.handle(modifiedRequest);
  }
  constructor() {}
}
