import { Component } from '@angular/core';
import { ListsService } from 'src/app/core/services/lists.service';
import { IList } from 'src/app/core/interfaces/list.interface';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent {
  constructor(private listsService: ListsService) {}
  isOpen: boolean = false;
  lists: IList[] = [];
  ngOnInit() {
    this.lists = this.listsService.getAll();
  }
  toggleAddList(): void {
    this.isOpen = !this.isOpen;
  }
}
