import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from "rxjs/operators";
import { IProperty } from '../propery-list/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(){
    return this.http.get('data/properties.json');
  }
}

// import { user } from './user.model';

// declare var require: any;

// var myUser: user = require('../assests/sampleJson.json');



