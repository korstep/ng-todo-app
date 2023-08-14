import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ITask } from 'src/app/core/interfaces/task.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasks: ITask[] = [];
  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
