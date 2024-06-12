import { Component, OnInit } from '@angular/core';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isVisible: boolean = true;
  isVisibleSecondBox: boolean = true;
  menuVisible: boolean = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menuVisible$.subscribe(visible => {
      this.menuVisible = visible;
    });
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleVisibilitySecondBox() {
    this.isVisibleSecondBox = !this.isVisibleSecondBox;
  }
}
