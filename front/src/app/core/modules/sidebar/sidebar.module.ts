import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './components/lists/lists.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SidebarComponent } from './sidebar.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { ListModule } from '@ui';

@NgModule({
  declarations: [
    ListsComponent,
    TasksComponent,
    SidebarComponent,
    AddListComponent,
  ],
  exports: [SidebarComponent],
  imports: [CommonModule, ListModule],
})
export class SidebarModule {}
