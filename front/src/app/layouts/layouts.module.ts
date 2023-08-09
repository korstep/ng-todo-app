import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedLayoutComponent } from './authenticated-layout/authenticated-layout.component';
import { UnauthenticatedLayoutComponent } from './unauthenticated-layout/unauthenticated-layout.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthenticatedLayoutComponent, UnauthenticatedLayoutComponent],
  exports: [AuthenticatedLayoutComponent, UnauthenticatedLayoutComponent],
  imports: [RouterModule, CommonModule, CoreModule],
})
export class LayoutsModule {}
