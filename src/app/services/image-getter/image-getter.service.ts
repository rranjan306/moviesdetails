import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageGetterService {

  constructor() { }

  getImageFromAssets() {
  	return [
  		{id: 1, name: 'wolverine', image: 'assets/images/crow1.jpg'},
  		{id: 2, name: 'pirates', image: 'assets/images/crow2.jpeg'},
  		{id: 3, name: 'annihilation', image: 'assets/images/crow3.jpg'},
  		{id: 4, name: 'venom', image: 'assets/images/corw4.jpg'},	
  		{id: 5, name: '7-khoon', image: 'assets/images/crow5.jpg'},
  		{id: 6, name: 'rahees', image: 'assets/images/crow6.jpg'},
  		{id: 7, name: 'highway', image: 'assets/images/crow7.jpg'},
  		{id: 8, name: 'kalank', image: 'assets/images/crow9.jpg'},
  	];
  }
}
