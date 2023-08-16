import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IList } from '@interfaces/list.interface';
import { TasksService } from 'src/app/modules/tasks/services/tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private tasksService: TasksService, private router: Router) {}
  @Input() list!: IList;
  tasksCount: number = 0;
  ngOnInit() {
    this.tasksService.getAll().subscribe((tasks) => {
      this.tasksCount = tasks.filter(
        (task) => task.list.id === this.list.id
      ).length;
    });
  }
  navigateToList() {
    this.router.navigate(['/tasks', this.list.id]);
  }
}
