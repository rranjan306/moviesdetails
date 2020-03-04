import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username, password): Observable<any> {
  	let params = new HttpParams()
  	.set('username', username)
  	.set('password', password);
  	return this.http.get('login', { params });
  }

  getToken() {
  	return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  }

  setToken(token) {
  	localStorage.setItem('token', token);
  }

  logout() {
  	localStorage.setItem('token', null);
  }
}
