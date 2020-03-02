import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movies: MoviesService) { }

  ngOnInit() {
  	//console.log(this.movies.getMovies());
  	this.movies.getMovies().subscribe((data) => console.log(data));
  }

}
