import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

	static BASE_URL = 'http://localhost:3000/api'

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  	const baseAPI = req.clone({url: `${InterceptorService.BASE_URL}/${req.url}`});
  	return next.handle(baseAPI);
  }
}
