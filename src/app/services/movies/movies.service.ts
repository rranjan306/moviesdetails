import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
  	const headers = new HttpHeaders({
			"x-rapidapi-host": "box-office-buz1.p.rapidapi.com",
			"x-rapidapi-key": "99e41e9b23mshc5c132edc72c0c8p138d39jsn70f3ce704b75"
		});
		
  	return this.http.get('', { headers });
  }
}
