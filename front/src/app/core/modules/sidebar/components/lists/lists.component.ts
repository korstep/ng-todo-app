import { Component, OnInit } from '@angular/core';
import { ListsService } from 'src/app/core/services/lists.service';
import { IList } from 'src/app/core/interfaces/list.interface';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  title: string = 'List';
  lists: IList[] = [];

  isOpen: boolean = false;

  constructor(private listsService: ListsService) {}

  ngOnInit() {
    this.listsService.getAll().subscribe((lists): void => {
      this.lists = lists;
    });
  }

  toggleAddList(): void {
    this.isOpen = !this.isOpen;
  }
}
