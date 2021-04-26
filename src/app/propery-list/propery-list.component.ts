import { Component, OnInit } from '@angular/core';
import { HousingService } from '../services/housing.service';
import { IProperty } from './IProperty.interface';

@Component({
  selector: 'app-propery-list',
  templateUrl: './propery-list.component.html',
  styleUrls: ['./propery-list.component.css']
})
export class ProperyListComponent implements OnInit {
  properties: any;
  constructor(private housingService:HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
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

}

