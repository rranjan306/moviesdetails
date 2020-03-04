import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(loginForm): void {
    this.loading = true;

  	this.auth
  		.login(loginForm.value.username, loginForm.value.password)
  		.subscribe(res => {
        this.loading = false;
        this.setToken(res);
  		});
  }

  setToken(res) {
    this.auth.setToken(res.token);
    this.router.navigate(['/home']);
  }
}
