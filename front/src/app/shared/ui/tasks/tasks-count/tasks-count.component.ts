import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-count',
  templateUrl: './tasks-count.component.html',
  styleUrls: ['./tasks-count.component.scss'],
})
export class TasksCountComponent {
  @Input('count') tasksCount: number = 0;
}
