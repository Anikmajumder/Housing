import { style } from '@angular/animations';
import {Component} from '@angular/core'
@Component({
  selector: 'app-property-card',
  //template:`<h1>This is property card<h1>`,
  templateUrl:'property-card.component.html',
  //styles: ['h1 {font-weight: normal;}'],
  styleUrls:['property-card.component.css']
})
export class PropertyCardComponent {
Property: any={
  "Id":1,
  "Name":"new house",
  "Type":"House",
  "Price":1200
}

}
