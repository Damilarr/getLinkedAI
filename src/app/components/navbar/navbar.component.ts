import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  openNavBar: boolean = false;
  constructor(private router: Router) {}
  showNav() {
    this.openNavBar = true;
  }
  closeNav() {
    this.openNavBar = false;
  }
  Register() {
    this.router.navigate(['/register']);
  }
}
