import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnDestroy {
  title: string = 'Sign Up';
  signUpForm!: FormGroup;
  emailFormControl!: FormControl;
  passwordControl: FormControl;
  submitted: boolean = false;
  private signupSubscription: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.signUpForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });

    this.emailFormControl = this.signUpForm.get('email') as FormControl;
    this.passwordControl = this.signUpForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm);
      this.signupSubscription = this.authService
        .signup(
          this.signUpForm.controls['email'].value,
          this.signUpForm.controls['password'].value
        )
        .subscribe({
          next: () => {},
          error: (error) => {
            console.error(error);
          },
        });
    }
    this.submitted = true;
  }

  ngOnDestroy() {
    if (this.signupSubscription) {
      this.signupSubscription.unsubscribe();
    }
  }
}
