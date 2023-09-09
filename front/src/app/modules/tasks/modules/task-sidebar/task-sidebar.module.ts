import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSidebarComponent } from './task-sidebar.component';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';
import { ButtonModule } from '@ui';

@NgModule({
  declarations: [TaskSidebarComponent],
  exports: [TaskSidebarComponent],
  imports: [CommonModule, LayoutsModule, ButtonModule],
})
export class TaskSidebarModule {}
