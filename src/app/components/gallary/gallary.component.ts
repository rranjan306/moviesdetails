import { Component, OnInit } from '@angular/core';
import { ImageGetterService } from '../../services/image-getter/image-getter.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
	images: any[];

  constructor(private ims: ImageGetterService) { }

  ngOnInit() {
  	this.images = this.ims.getImageFromAssets();
  }
}
