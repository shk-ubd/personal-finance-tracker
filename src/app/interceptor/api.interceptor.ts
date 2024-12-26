// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
//   HttpResponse,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { Router } from '@angular/router';
// import { LoginService } from '../../services/login.service';

// @Injectable()
// export class ApiInterceptor implements HttpInterceptor {
//   constructor(private router: Router, private loginService: LoginService) { }

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('jwtToken');

//     let authReq = req;
//     if (token) {
//       authReq = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     }

//     return next.handle(authReq).pipe(
//       map((event: HttpEvent<any>) => {
//         if (event instanceof HttpResponse) {
//           if (event.body && event.body.isError) {
//             throw new HttpErrorResponse({
//               error: event.body.message,
//               headers: event.headers,
//               status: event.status,
//               statusText: event.statusText,
//               url: event.url || undefined,
//             });
//           }
//         }
//         return event;
//       }),
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 401) {
//           this.loginService.logoutUser();

//           this.router.navigate(['/login']);
//         }
//         return throwError(() => error);
//       })
//     );
//   }
// }
