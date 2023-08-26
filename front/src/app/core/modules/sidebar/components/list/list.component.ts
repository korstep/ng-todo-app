import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IList } from '@interfaces/list.interface';
import { TasksService } from 'src/app/modules/tasks/services/tasks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(private tasksService: TasksService, private router: Router) {}
  @Input() list!: IList;
  tasksCount: number = 0;
  private tasksSubscription: Subscription | undefined;

  ngOnInit() {
    this.tasksSubscription = this.tasksService.getAll().subscribe((tasks) => {
      this.tasksCount = tasks.filter(
        (task) => task.list.id === this.list.id
      ).length;
    });
  }

  ngOnDestroy() {
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }
  }

  navigateToList() {
    this.router.navigate(['/tasks', this.list.id]);
  }
}
