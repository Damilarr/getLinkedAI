import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  openNavBar: boolean = false;
  showNav() {
    this.openNavBar = true;
  }
  closeNav() {
    this.openNavBar = false;
  }
}
