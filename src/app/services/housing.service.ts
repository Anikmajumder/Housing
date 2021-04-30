import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from "rxjs/operators";
import { IProperty } from '../model/iproperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array<IProperty> = [];

        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);

          }
        }
        return propertiesArray;
      })
    );
  }
}

// import { user } from './user.model';

// declare var require: any;

// var myUser: user = require('../assests/sampleJson.json');



