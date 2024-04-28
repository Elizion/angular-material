import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from '../models/menu';
import { MENUS } from '../models/mocks/mock-menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  constructor() { }
  
  getMenusMock(): Menu[] {
    return MENUS;
  }
  
  getMenus(): Observable<Menu[]> {
    const menus = of(MENUS);
    return menus;
  }
  
}