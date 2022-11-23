import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  drop = false;
  hamMenu = false;

  dropdown(): void {
    if (this.drop === false) {
      this.drop = true;
    } else {
      this.drop = false;
    }
  }

  hamBtn(): void {
    if (this.hamMenu === false) {
      this.hamMenu = true;
    } else {
      this.hamMenu = false;
    }
  }
}
