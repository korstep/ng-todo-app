import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptButtonComponent } from './accept-button/accept-button.component';
import { AddButtonComponent } from './add-button/add-button.component';

@NgModule({
  declarations: [AcceptButtonComponent, AddButtonComponent],
  exports: [AcceptButtonComponent, AddButtonComponent],
  imports: [CommonModule],
})
export class ButtonModule {}
