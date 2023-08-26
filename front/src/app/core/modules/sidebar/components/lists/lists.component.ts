import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListsService } from 'src/app/core/services/lists.service';
import { IList } from 'src/app/core/interfaces/list.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit, OnDestroy {
  title: string = 'List';
  lists: IList[] = [];
  isOpen: boolean = false;
  listsSubscription!: Subscription;

  constructor(private listsService: ListsService) {}

  ngOnInit() {
    this.listsSubscription = this.listsService
      .getAll()
      .subscribe((lists): void => {
        this.lists = lists;
      });
  }

  toggleAddList(): void {
    this.isOpen = !this.isOpen;
  }
  ngOnDestroy(): void {
    if (this.listsSubscription) {
      this.listsSubscription.unsubscribe();
    }
  }
}
