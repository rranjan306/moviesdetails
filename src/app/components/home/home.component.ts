import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import { IUsers } from '../../interfaces/users/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movies: MoviesService) { }

  ngOnInit() {
  	//this.movies.getUsers().subscribe((data: IUsers[]) => console.log(data));
  }
}
