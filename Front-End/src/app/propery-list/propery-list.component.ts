import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from '../model/iproperty';
import { Ipropertybase } from '../model/ipropertybase';
import { HousingService } from '../services/housing.service';


@Component({
  selector: 'app-propery-list',
  templateUrl: './propery-list.component.html',
  styleUrls: ['./propery-list.component.css']
})
export class ProperyListComponent implements OnInit {
  SellRent = 1;
  properties: Ipropertybase[];
  City = '';
  SearchCity='';
  CityClear='';
  SortbyParam='';
  SortDirection='asc';

  constructor(private route:ActivatedRoute,private housingService:HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
      this.properties = data;
      console.log(data);

      },error=>{
        console.log('httperror');
        console.log(error);
      }
      );
     // this.http.get('https://jsonkeeper.com/b/WFPT').subscribe(
      //data=>{
        //this.properties=data;
        //console.log(data);
      //}
   //);

  }

  onCityFilter(){
    this.SearchCity=this.City;
  }
  onCityClear(){
    this.SearchCity='';
    this.City='';
  }

  onSortDirection(){
    if(this.SortDirection==='desc'){
      this.SortDirection='asc';
    }else{
      this.SortDirection='desc';
    }
  }

}

