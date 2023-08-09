import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListModule } from '@ui';

@NgModule({
  declarations: [TasksComponent, TasksListComponent, TaskComponent],
  imports: [CommonModule, TasksRoutingModule, SharedModule, ListModule],
})
export class TasksModule {}
