import { Component, OnInit } from '@angular/core';
import { ListsService } from 'src/app/core/services/lists.service';
import { IList } from 'src/app/core/interfaces/list.interface';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  title: string = 'List';
  lists$!: Observable<IList[]>;
  isOpen: boolean = false;

  constructor(private listsService: ListsService) {}

  ngOnInit() {
    this.lists$ = this.listsService.getAll();

    this.listsService.listsChanges$.subscribe(() => {
      this.lists$ = this.listsService.getAll();
    });
  }

  toggleAddList(): void {
    this.isOpen = !this.isOpen;
  }
}
