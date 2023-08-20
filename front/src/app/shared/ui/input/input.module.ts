import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputPasswordComponent, InputEmailComponent],
  exports: [InputPasswordComponent, InputEmailComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class InputModule {}
