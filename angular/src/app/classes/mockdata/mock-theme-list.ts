import { ThemeListEntity } from '../theme-list-entity';

export const MOCKTHEMELIST: ThemeListEntity[] = [
  {
    id: 1,
    name: 'first theme',
    parentId: null
  },
  {
    id: 2,
    name: 'second theme',
    parentId: null
  },
  {
    id: 2,
    name: 'third theme',
    parentId: 1
  },
  
];
