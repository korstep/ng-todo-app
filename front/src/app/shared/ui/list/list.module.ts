import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListColorComponent } from './list-color/list-color.component';

@NgModule({
  declarations: [ListColorComponent],
  exports: [ListColorComponent],
  imports: [CommonModule],
})
export class ListModule {}
