import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { IUsers } from '../../interfaces/users/users';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovieDetails(id: string): Observable<any> {
    const params = new HttpParams().set('id', id);
    return this.http
               .get('movie-details', { params })
               .pipe(retry(1))
  }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>('https://jsonplaceholder.typicode.com/users');
  }
}
