import { Component } from '@angular/core';
import { ListsService } from 'src/app/core/services/lists.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent {
  constructor(private listsService: ListsService) {}
  allowedColors: string[] = [
    '#ff6b6b',
    '#da77f2',
    '#9775fa',
    '#5c7cfa',
    '#66d9e8',
    '#8ce99a',
    '#ffd43b',
    '#ff922b',
  ];
  listTitle: string = '';
  selectedColor: string = this.allowedColors.length
    ? this.allowedColors[Math.floor(Math.random() * this.allowedColors.length)]
    : '';
  selectColor(color: string): void {
    this.selectedColor = color;
  }
  addList() {
    if (!this.listTitle || this.listTitle.length >= 16) {
      return;
    }

    this.listsService
      .addList({
        title: this.listTitle,
        color: this.selectedColor,
      })
      .subscribe((obj) => {
        this.listsService.getAll();
        console.log(obj);
      });
  }
}
