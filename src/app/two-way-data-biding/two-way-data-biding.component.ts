import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-biding',
  templateUrl: './two-way-data-biding.component.html',
  styleUrls: ['./two-way-data-biding.component.css']
})
export class TwoWayDataBidingComponent {

searchValue: string = "Hello World"

displaySearchData(eventData : Event){
this.searchValue = ((<HTMLInputElement>eventData.target).value);
}
}
