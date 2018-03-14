import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxDataGridModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { ThemeListService } from './classes/themes.service'
import { ThemeListComponent } from './pages/theme-list.component'

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule
  ],
  providers: [ ThemeListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

