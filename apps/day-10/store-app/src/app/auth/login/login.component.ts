import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthData } from '../auth-data.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onLogin() {
    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const authData: AuthData = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }

    this.authService.login(authData).subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(['/products']);
      },
      (error: Error) => {
        console.log('Login failed.');
        console.log('Error:', error);
        this.isLoading = false;

        this.errorMessage = error.message;
        window.setTimeout(() => {
          this.errorMessage = null;
        }, 6000);
      }
    );

  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
