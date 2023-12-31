import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './components/lists/lists.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SidebarComponent } from './sidebar.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { ListModule, ButtonModule, TasksModule } from '@ui';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { LayoutsModule } from 'src/app/shared/layouts/layouts.module';

@NgModule({
  declarations: [
    ListsComponent,
    TasksComponent,
    SidebarComponent,
    AddListComponent,
    ListComponent,
  ],
  exports: [SidebarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ListModule,
    ButtonModule,
    TasksModule,
    LayoutsModule,
  ],
})
export class SidebarModule {}
