import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private _http: HttpClient){}

	getCity(city) {
		const API_KEY=""
		return this._http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
	}
}