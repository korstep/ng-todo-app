import { Component, OnDestroy, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { ITask } from 'src/app/core/interfaces/task.interface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit, OnDestroy {
  private tasks: ITask[] = [];
  private selectedList: number | undefined;
  filteredTasks: ITask[] = [];
  private tasksSubscription!: Subscription;
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tasksSubscription = this.tasksService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
      this.updateFilteredTasks();
    });
    this.subscribeOnList();
  }
  subscribeOnList() {
    this.route.params.subscribe((params) => {
      this.selectedList = Number(params['list']);
      this.updateFilteredTasks();
    });
  }
  updateFilteredTasks() {
    if (this.selectedList) {
      this.filteredTasks = this.tasks.filter(
        (item) => item.list.id === this.selectedList
      );
    } else {
      this.filteredTasks = this.tasks;
    }
  }
  ngOnDestroy(): void {
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }
  }
}
