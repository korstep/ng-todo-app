import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isOpen: boolean = true;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  toggleIsOpen(): void {
    this.isOpen = !this.isOpen;

    // Проверяем значение isOpen и добавляем или удаляем класс close у хост-элемента
    if (!this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'close');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'close');
    }
  }
}
