import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnDestroy {
  title: string = 'Sign in';
  error: string = '';
  signInForm!: FormGroup;
  emailFormControl!: FormControl;
  passwordControl: FormControl;
  submitted: boolean = false;
  private signinSubscription: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.signInForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });

    this.emailFormControl = this.signInForm.get('email') as FormControl;
    this.passwordControl = this.signInForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.signinSubscription = this.authService
        .signin(
          this.signInForm.controls['email'].value,
          this.signInForm.controls['password'].value
        )
        .subscribe({
          error: (e) => (this.error = e),
        });
    }
    this.submitted = true;
  }
  ngOnDestroy() {
    if (this.signinSubscription) {
      this.signinSubscription.unsubscribe();
    }
  }
}
