import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [AuthenticatedLayoutComponent],
  imports: [CommonModule, SidebarModule, AppRoutingModule],
  exports: [SidebarModule, AuthenticatedLayoutComponent],
})
export class CoreModule {}
