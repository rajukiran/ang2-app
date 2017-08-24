import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--<div>
    <nav>
      <a routerLink="/card" routerLinkActive="active">Card</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    </nav>
    </div>-->
    <app-header></app-header>
    <app-sidenav></app-sidenav>
    <router-outlet></router-outlet>
    <app-footer></app-footer>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular app';

  constructor() { }

  ngOnInit() {
  }
}
