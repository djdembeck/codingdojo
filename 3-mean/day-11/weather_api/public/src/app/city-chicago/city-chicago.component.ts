import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city-chicago',
  templateUrl: './city-chicago.component.html',
  styleUrls: ['./city-chicago.component.styl']
})
export class CityChicagoComponent implements OnInit {

	constructor(private _httpService: HttpService){}

	ngOnInit() {
		this.getCityData('chicago');
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
