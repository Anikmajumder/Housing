import { style } from '@angular/animations';
import { Input } from '@angular/core';
import {Component} from '@angular/core';
import { Ipropertybase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-card',
  //template:`<h1>This is property card<h1>`,
  templateUrl:'property-card.component.html',
  //styles: ['h1 {font-weight: normal;}'],
  styleUrls:['property-card.component.css']
})
export class PropertyCardComponent {
@Input() propertyes : Ipropertybase;
@Input() hidenIcons: boolean;

}
