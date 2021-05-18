import { CitySeattleComponent } from './city-seattle/city-seattle.component';
import { CitySanjoseComponent } from './city-sanjose/city-sanjose.component';
import { CityBurbankComponent } from './city-burbank/city-burbank.component';
import { CityDallasComponent } from './city-dallas/city-dallas.component';
import { CityWashingtonComponent } from './city-washington/city-washington.component';
import { CityChicagoComponent } from './city-chicago/city-chicago.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: 'seattle',component: CitySeattleComponent },
	{ path: 'sanjose',component: CitySanjoseComponent },
	{ path: 'burbank',component: CityBurbankComponent },
	{ path: 'dallas',component: CityDallasComponent },
	{ path: 'washington',component: CityWashingtonComponent },
	{ path: 'chicago',component: CityChicagoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
