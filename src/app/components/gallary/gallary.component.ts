import { Component, OnInit } from '@angular/core';
import { ImageGetterService } from '../../services/image-getter/image-getter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
	images: any[];

  constructor(private ims: ImageGetterService, private router: Router) { }

  ngOnInit() {
  	this.images = this.ims.getImageFromAssets();
  }

  movieById(mov) {
  	this.router.navigate(['/movie', `${mov.name}`, `${mov.id}`]);
  }
}
