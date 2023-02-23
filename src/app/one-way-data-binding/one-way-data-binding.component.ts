import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  templateUrl: './one-way-data-binding.component.html',
  styleUrls: ['./one-way-data-binding.component.css']
})
export class OneWayDataBindingComponent {
display : string = ""

displaySearchData(eventData : Event){
   this.display =((<HTMLInputElement>eventData.target).value);
}
}
