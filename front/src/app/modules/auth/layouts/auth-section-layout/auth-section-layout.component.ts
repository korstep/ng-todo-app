import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-section-layout',
  templateUrl: './auth-section-layout.component.html',
  styleUrls: ['./auth-section-layout.component.scss'],
})
export class AuthSectionLayoutComponent {
  @Input()
  title: string = '';
}
