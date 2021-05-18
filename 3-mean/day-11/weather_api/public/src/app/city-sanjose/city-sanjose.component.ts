import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-city-sanjose',
  templateUrl: './city-sanjose.component.html',
  styleUrls: ['./city-sanjose.component.styl']
})
export class CitySanjoseComponent implements OnInit {

	constructor(private _httpService: HttpService){}

	ngOnInit() {
		this.getCityData('seattle');
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