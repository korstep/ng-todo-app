import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
})
export class InputEmailComponent implements OnInit {
  @Input() submitted = false;
  @Input() placeholder: string = 'Email';
  @Input() emailControl!: FormControl;
  ngOnInit() {
    this.emailControl.setValidators([Validators.required, Validators.email]);
    this.emailControl.updateValueAndValidity();
  }
}
