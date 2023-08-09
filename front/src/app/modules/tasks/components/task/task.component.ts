import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: ITask;
  showDetails: boolean = false;
  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
