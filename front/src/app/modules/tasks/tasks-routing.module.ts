import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TaskSidebarComponent } from './modules/task-sidebar/task-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [{ path: ':taskId', component: TaskSidebarComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
