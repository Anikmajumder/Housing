import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from "rxjs/operators";
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';
import { Ipropertybase } from '../model/ipropertybase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getProperty(id:number){
    return this.getAllProperties().pipe(
      map(propertyArray=>{
        //throw new Error('Some error');
        return propertyArray.find(p=>p.Id === id)
      })
    );
  }

  getAllProperties(SellRent?: number): Observable<Property[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array<Property> = [];
        const localPorperties = JSON.parse(localStorage.getItem('newProp'));

        if(localPorperties){
          for(const id in localPorperties){
            if(SellRent){
            if(localPorperties.hasOwnProperty(id) && localPorperties[id].SellRent === SellRent){
              propertiesArray.push(localPorperties[id]);
          }
        } else{
          propertiesArray.push(localPorperties[id]);
        }
        }
      }

        for(const id in data){
          if(SellRent){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);

          }
        } else{
          propertiesArray.push(data[id]);

        }
        }
        return propertiesArray;
      })
    );
    return this.http.get<Property[]>('data/properties.json');
  }

  addProperty(property: Property) {
    let newProp=[property];
    if(localStorage.getItem('newProp')){
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropId(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PID', String(+localStorage.getItem('PID')+1))
      return +localStorage.getItem('PID');
    }else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}

// import { user } from './user.model';

// declare var require: any;

// var myUser: user = require('../assests/sampleJson.json');



