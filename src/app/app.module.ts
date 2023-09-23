import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineGridComponent } from './timeline-grid/timeline-grid.component';
import { PrimeNgModule } from 'src/PrimeNg/prime-ng/prime-ng.module';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    TimelineGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
