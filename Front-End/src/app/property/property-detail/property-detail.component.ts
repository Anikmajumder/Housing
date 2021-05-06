import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
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
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor( private route:ActivatedRoute, private router:Router, private houingService:HousingService ) { }

  ngOnInit(): void {
    this.propertyId= +this.route.snapshot.params['id'];

    this.route.data.subscribe(
      (data: Property)=>{
        this.property=data['prp'];
      }
    );
    // this.route.params.subscribe((params)=>{
    //   this.propertyId=+params['id'];
    //   this.houingService.getProperty(this.propertyId).subscribe(
    //     (data: Property) => {
    //       this.property = data;
    //     },error => this.router.navigate(['/'])
    //   );
    // });

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
    
    ];

    this.galleryImages = [
      {
        small: 'assets/images/prop-1.jpg',
        medium: 'assets/images/prop-1.jpg',
        big: 'assets/images/prop-1.jpg'
      },
      {
        small: 'assets/images/prop-2.jpg',
        medium: 'assets/images/prop-2.jpg',
        big: 'assets/images/prop-2.jpg'
      },
      {
        small: 'assets/images/prop-3.jpg',
        medium: 'assets/images/prop-3.jpg',
        big: 'assets/images/prop-3.jpg'
      },{
        small: 'assets/images/prop-4.jpg',
        medium: 'assets/images/prop-4.jpg',
        big: 'assets/images/prop-4.jpg'
      },
      {
        small: 'assets/images/prop-5.jpg',
        medium: 'assets/images/prop-5.jpg',
        big: 'assets/images/prop-5.jpg'
      }
    ];


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
