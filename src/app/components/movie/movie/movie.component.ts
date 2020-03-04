import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../services/movies/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(private routes: ActivatedRoute, private movie: MoviesService) { }

  ngOnInit() {
  	this.routes.params.subscribe((data) => {
  		this.getMovieDetails(data.id);
  	});
  }

  getMovieDetails(id: string): void {
  	this.movie.getMovieDetails(id).subscribe((data) => {
  		console.log(data);
  	}, (error) => {
  		console.log(error);
  	}, () => {
  		console.log('fetched');
  	});
  }
}
