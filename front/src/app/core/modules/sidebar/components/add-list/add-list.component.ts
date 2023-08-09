import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent {
  @Output() colorSelected = new EventEmitter<string>();
  colors: string[] = [
    '#ff6b6b',
    '#da77f2',
    '#9775fa',
    '#5c7cfa',
    '#66d9e8',
    '#8ce99a',
    '#ffd43b',
    '#ff922b',
  ];
  selectedColor: string = this.colors.length
    ? this.colors[Math.floor(Math.random() * this.colors.length)]
    : '';
  selectColor(color: string): void {
    this.selectedColor = color;
  }
}
