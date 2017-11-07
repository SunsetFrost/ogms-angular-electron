import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) { }

  menus: Array<Menu>;

  currentMenuId: number;

  ngOnInit() {
    this.menus = [
      new Menu(1, 'Server', 'server'),
      new Menu(2, 'Service', 'service'),
      new Menu(3, 'File', 'file'),
      new Menu(4, 'Tool', 'tool')
    ];
  }

  nav(menu: Menu) {
    this.router.navigateByUrl(menu.link);
    this.currentMenuId = menu.id;
  }
}

export class Menu {
  constructor(
    public id: number,
    public name: string,
    public link: string
  ) {

  }
}
