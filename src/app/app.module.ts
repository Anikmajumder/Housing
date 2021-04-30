import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import {PropertyCardComponent} from './property/property-card/property-card.component';
import { ProperyListComponent } from './propery-list/propery-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {HousingService} from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { UserServiceService } from './services/user-service.service';
import { AlertifyService } from './services/alertify.service';
const appRoutes: Routes=[
  {path:'', component: ProperyListComponent},
  {path:'rent-property', component: ProperyListComponent},
  {path:'add-property', component: AddPropertyComponent},
  {path:'property-detail/:id', component: PropertyDetailComponent},
  {path:'user/login', component: UserLoginComponent},
  {path:'user/registration', component: UserRegistrationComponent},
  {path:'**', component: ProperyListComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    ProperyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegistrationComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertifyService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
