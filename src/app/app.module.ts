import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {PropertyCardComponent} from './property/property-card/property-card.component';
import { ProperyListComponent } from './propery-list/propery-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HousingService} from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes: Routes=[
  {path:'', component: ProperyListComponent},
  {path:'rent-property', component: ProperyListComponent},
  {path:'add-property', component: AddPropertyComponent},
  {path:'property-detail/:id', component: PropertyDetailComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    ProperyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
