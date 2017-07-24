import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  constructor() { }

  navbarVisible = false;

  navbarStyle() {
    if(!this.navbarVisible) {
      return {'min-height': '35px', 'max-height': '35px'}
    } else {
      const height = document.getElementsByClassName('top-level-nav')[0].children.length * 35 + 'px'
      return {'min-height': height, 'max-height': 'auto'}
    }
  }

  toggleNavbarVisible() {
    this.navbarVisible = !this.navbarVisible
  }

  ngOnInit() {
  }

}
