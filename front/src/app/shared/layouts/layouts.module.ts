import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';

@NgModule({
  declarations: [SidebarLayoutComponent],
  exports: [SidebarLayoutComponent],
  imports: [CommonModule],
})
export class LayoutsModule {}
