import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId:number;
  property = new Property();
  constructor( private route:ActivatedRoute, private router:Router, private houingService:HousingService ) { }

  ngOnInit(): void {
    this.propertyId= +this.route.snapshot.params['id'];

    this.route.params.subscribe((params)=>{
      this.propertyId=+params['id'];
      this.houingService.getProperty(this.propertyId).subscribe(
        (data: Property) => {
          this.property = data;
        }
      );
    });
  }


}

// data=>{
//   this.property.Name=data.Name;
//   this.property.BHK=data.BHK;
//   this.property.Price=data.Price;
//   this.property.City=data.City;
//   this.property.BuiltArea=data.BuiltArea;
//   this.property.CarpetArea=data.CarpetArea;
//   this.property.FType=data.FType;

// }
