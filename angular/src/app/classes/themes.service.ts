import { ThemeListEntity } from './theme-list-entity';
import { MOCKTHEMELIST } from './mockdata/mock-theme-list';
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeListService {
  getThemeList(): Promise<ThemeListEntity[]> {
    return Promise.resolve(MOCKTHEMELIST);
  }
}
