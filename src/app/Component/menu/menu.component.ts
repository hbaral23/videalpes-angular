import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() navItems: Array<any>;
  @HostBinding('class.sidebar-nav') true;
  @HostBinding('attr.role') role;

  constructor() {
  }

  ngOnInit() {

  }
  
  isDivider(navItem) {
      return !!navItem.divider
  }

  isTitle(navItem) {
      return !!navItem.title
  }

  isHasChild(navItem) {
      return navItem.hasOwnProperty('children') && navItem.children.length > 0;
  }

}
