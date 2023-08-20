import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export class InputPasswordComponent implements OnInit {
  @Input() submitted = false;
  @Input() passwordControl!: FormControl;
  @Input() placeholder: string = 'Password';
  showPassword: boolean = false;
  ngOnInit() {
    this.passwordControl.setValidators([
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/
      ),
    ]);
    this.passwordControl.updateValueAndValidity();
  }
  toggleshowPassword() {
    this.showPassword = !this.showPassword;
  }
}
