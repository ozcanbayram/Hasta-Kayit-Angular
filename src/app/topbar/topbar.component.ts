import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  menuVisible: boolean = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menuVisible$.subscribe(visible => {
      this.menuVisible = visible;
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
