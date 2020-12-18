import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthData } from '../auth-data.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSignUp() {
    if (!this.form.valid) {
      console.log('Sign up form is invalid.');
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const authData: AuthData = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    }

    this.authService.signUp(authData).subscribe(
      // success callback
      () => {
        this.isLoading = false;
        this.router.navigate(['/products']);
      },
      // failure callback
      (error: Error) => {
        console.log('Sign up failed.');
        console.log('Error:', error);
        this.isLoading = false;

        this.errorMessage = error.message;
        window.setTimeout(() => {
          this.errorMessage = null;
        }, 6000);

      }
    );
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

}
