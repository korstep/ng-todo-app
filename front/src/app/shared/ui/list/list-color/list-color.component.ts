import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-color',
  templateUrl: './list-color.component.html',
  styleUrls: ['./list-color.component.scss'],
})
export class ListColorComponent {
  @Input()
  color!: string;

  // isValidHexColor(color: string): boolean {
  //   const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  //   return hexColorRegex.test(color);
  // }
}
