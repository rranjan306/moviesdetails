import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageGetterService {

  constructor() { }

  getImageFromAssets() {
  	return [
  		{id: 1, image: 'assets/images/crow1.jpg'},
  		{id: 2, image: 'assets/images/crow2.jpeg'},
  		{id: 3, image: 'assets/images/crow3.jpg'},
  		{id: 4, image: 'assets/images/corw4.jpg'},	
  		{id: 5, image: 'assets/images/crow5.jpg'},
  		{id: 6, image: 'assets/images/crow6.jpg'},
  		{id: 7, image: 'assets/images/crow7.jpg'},
  		{id: 8, image: 'assets/images/crow9.jpg'},
  	];
  }
}
