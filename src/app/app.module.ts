import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersTableComponent } from './servers-table/servers-table.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerFiltersComponent } from './server-filters/server-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersTableComponent,
    ServerFiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
