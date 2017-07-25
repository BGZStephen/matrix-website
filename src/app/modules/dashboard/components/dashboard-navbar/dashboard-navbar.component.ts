import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent implements OnInit {

  constructor() { }

  navbarVisible = false;
  activeSubmenu: number = -1;

  navbarStyle() {
    if(!this.navbarVisible) {
      return {'min-height': '35px', 'max-height': '35px'}
    } else {
      const height = document.getElementsByClassName('top-level-nav')[0].children.length * 35 + 'px'
      return {'min-height': height, 'max-height': '100vh'}
    }
  }

  submenuStyle(index) {
    if(this.activeSubmenu === index) {
      let pixels
      if(screen.width > 1024) {
        pixels = 50;
      } else {
        pixels = 35;
      }
      const height = document.getElementsByClassName('top-level-item')[index].getElementsByClassName('second-level-nav')[0].children.length * pixels + 'px'
      return {'min-height': height, 'max-height': 'auto'}
    } else {
      return {'min-height': '0', 'max-height': '0'}
    }
  }

  toggleNavbarVisible() {
    this.navbarVisible = !this.navbarVisible
  }

  setActiveSubmenu(index) {
    if(this.activeSubmenu === index) {
      this.activeSubmenu = -1;
    } else {
      this.activeSubmenu = index;
    }
  }

  ngOnInit() {
  }

}
