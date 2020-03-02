import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

	user: FormGroup;

	get name() {
		return this.user.get('name');
	}

	get username() {
		return this.user.get('username');
	}

	get password() {
		return this.user.get('password');
	}

	get phone() {
		return this.user.get('phone');
	}

	get email() {
		return this.user.get('email');
	}

  constructor(private regService: RegistrationService) { }

  ngOnInit() {
  	this.user = new FormGroup({
  		name: new FormControl('', Validators.required),
  		username: new FormControl('', Validators.required),
  		password: new FormControl('', [
  			Validators.required,
  			Validators.minLength(6),
  			Validators.maxLength(10),
  		]),
  		phone: new FormControl('', [
  			Validators.required,
  			Validators.minLength(10),
  			Validators.maxLength(10),
  		]),
  		email: new FormControl('', Validators.required),
  		address: new FormGroup({
  			street: new FormControl(''),
  			city: new FormControl(''),
  			state: new FormControl(''),
  		})
  	});
  }

  registration(): void {
  	this.regService
  		.post(this.user.value)
  		.subscribe((data) => {
  			console.log(data);
  		});
  }
}
