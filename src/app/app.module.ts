import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServersTableComponent} from './servers-table/servers-table.component';
import {HttpClientModule} from '@angular/common/http';
import {RangeSliderComponent} from './utility/range-slider/range-slider.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from "@angular/material/slider";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StorageFilterComponent } from './filters/storage-filter/storage-filter.component';
import { RamFilterComponent } from './filters/ram-filter/ram-filter.component';
import { StorageTypeFilterComponent } from './filters/storage-type-filter/storage-type-filter.component';
import { LocationFilterComponent } from './filters/location-filter/location-filter.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    ServersTableComponent,
    RangeSliderComponent,
    StorageFilterComponent,
    RamFilterComponent,
    StorageTypeFilterComponent,
    LocationFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
