import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThemeListComponent }  from './pages/theme-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/themes', pathMatch: 'full' },
  { path: 'themes',  component: ThemeListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
