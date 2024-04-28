import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html'
})
export class SalesComponent implements OnInit {

  menus: any;

  constructor(private menuService: MenuService) {

  }
  
  ngOnInit(): void {
    this.getMenus();
  }
  
  getMenus(): void {
    this.menuService.getMenus().subscribe(response => {
      this.menus = JSON.stringify(response);
    });
  }
  
}
