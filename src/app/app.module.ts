import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneWayDataBindingComponent } from './one-way-data-binding/one-way-data-binding.component';
import { TwoWayDataBidingComponent } from './two-way-data-biding/two-way-data-biding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OneWayDataBindingComponent,
    TwoWayDataBidingComponent,
    EventBindingComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
