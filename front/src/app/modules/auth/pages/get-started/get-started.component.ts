import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  title: string = 'Productive Mind';
  constructor(private router: Router) {}
  redirectToSignUp() {
    this.router.navigate(['/signup']);
  }
}
