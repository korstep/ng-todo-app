import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './modules/sidebar/sidebar.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SidebarModule],
  exports: [SidebarModule],
})
export class CoreModule {}
