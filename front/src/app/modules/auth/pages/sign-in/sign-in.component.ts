import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  title: string = 'Sign in';
  signInForm!: FormGroup;
  emailFormControl!: FormControl;
  passwordControl: FormControl;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });

    this.emailFormControl = this.signInForm.get('email') as FormControl;
    this.passwordControl = this.signInForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log(this.signInForm);
    }
    this.submitted = true;
  }
}
