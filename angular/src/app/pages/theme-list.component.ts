import { Component, OnInit } from '@angular/core';

import { ThemeListEntity } from '../classes/theme-list-entity';
import { ThemeListService } from '../classes/themes.service';

@Component({
  selector: 'my-themes',
  templateUrl: './theme-list.component.html',
  styleUrls: [ './theme-list.component.css' ]
})
export class ThemeListComponent implements OnInit {
  themes: ThemeListEntity[];
  selectedTheme: ThemeListEntity;

  constructor(
    private themeListService: ThemeListService) { }

  getThemes(): void {
    this.themeListService.getThemeList().then(themes => {
      for (let theme of themes){
        theme.items = [];

      }
      this.themes = themes;
    });
  }

  ngOnInit(): void {
    this.getThemes();
  }

  onSelect(theme: ThemeListEntity): void {
    this.selectedTheme = theme;
  }
}
