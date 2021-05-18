import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city-seattle',
  templateUrl: './city-seattle.component.html',
  styleUrls: ['./city-seattle.component.styl']
})
export class CitySeattleComponent implements OnInit {

	constructor(private _httpService: HttpService){}

	ngOnInit() {
		this.getCityData('san jose');
	}

	weather: any
	getCityData(city) {
	const observable = this._httpService.getCity(city);
	observable.subscribe(data => {
		console.log("Got weather data", data)
		this.weather = data;
	});
}
}
