import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city-dallas',
  templateUrl: './city-dallas.component.html',
  styleUrls: ['./city-dallas.component.styl']
})
export class CityDallasComponent implements OnInit {

	constructor(private _httpService: HttpService){}

	ngOnInit() {
		this.getCityData('dallas');
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