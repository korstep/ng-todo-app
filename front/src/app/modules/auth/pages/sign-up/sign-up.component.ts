import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  title: string = 'Sign Up';
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
    console.log(this.signInForm);
  }
}
