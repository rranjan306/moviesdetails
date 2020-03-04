import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router  } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

	token: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  	this.token = this.auth.getToken();
  }

  search(input): void {
    console.log(input.target.value);
  }

  logout():void {
  	this.auth.logout();
  	this.router.navigate(['/login']);
  }
}
