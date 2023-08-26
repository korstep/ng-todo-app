import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../../../modules/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isOpen: boolean = true;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private AuthService: AuthService
  ) {}

  toggleIsOpen(): void {
    this.isOpen = !this.isOpen;

    if (!this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'close');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'close');
    }
  }
  handleSignout(): void {
    this.AuthService.signout();
  }
}
