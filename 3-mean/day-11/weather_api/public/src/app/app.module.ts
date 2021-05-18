import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySeattleComponent } from './city-seattle/city-seattle.component';
import { CitySanjoseComponent } from './city-sanjose/city-sanjose.component';
import { CityBurbankComponent } from './city-burbank/city-burbank.component';
import { CityDallasComponent } from './city-dallas/city-dallas.component';
import { CityWashingtonComponent } from './city-washington/city-washington.component';
import { CityChicagoComponent } from './city-chicago/city-chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySeattleComponent,
    CitySanjoseComponent,
    CityBurbankComponent,
    CityDallasComponent,
    CityWashingtonComponent,
    CityChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
