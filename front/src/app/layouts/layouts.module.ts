import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedLayoutComponent } from './authenticated-layout/authenticated-layout.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthenticatedLayoutComponent],
  exports: [AuthenticatedLayoutComponent],
  imports: [RouterModule, CommonModule, CoreModule],
})
export class LayoutsModule {}
