import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {PropertyCardComponent} from './property/property-card/property-card.component';
import { ProperyListComponent } from './propery-list/propery-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HousingService} from './services/housing.service';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    ProperyListComponent,
    NavBarComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
