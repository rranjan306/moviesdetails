import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

	static BASE_URL = 'http://localhost:3000/api'

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  	const token = this.auth.getToken();
  	const baseAPI = req.clone({
  											url: `${InterceptorService.BASE_URL}/${req.url}`,
  											headers: req.headers.set('Authorization', "JWT " + token)
  									});
  	return next.handle(baseAPI);
  }
}
