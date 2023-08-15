import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksCountComponent } from './tasks-count/tasks-count.component';

@NgModule({
  declarations: [TasksCountComponent],
  exports: [TasksCountComponent],
  imports: [CommonModule],
})
export class TasksModule {}
