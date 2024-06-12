import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  menuVisible: boolean = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menuVisible$.subscribe(visible => {
      this.menuVisible = visible;
    });
  }
}
