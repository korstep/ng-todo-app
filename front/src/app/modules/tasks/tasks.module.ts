import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListModule, ButtonModule } from '@ui';
import { AddTaskButtonComponent } from './components/add-task-button/add-task-button.component';

@NgModule({
  declarations: [
    TasksComponent,
    TasksListComponent,
    TaskComponent,
    AddTaskButtonComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    ListModule,
    ButtonModule,
  ],
})
export class TasksModule {}
