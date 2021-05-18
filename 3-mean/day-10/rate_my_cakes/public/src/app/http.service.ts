import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	constructor(private _http: HttpClient){}
	getCakes(){
		return this._http.get<{baker:string,img:string,desc:string}[]>('/cakes');
	}

	addCake(cakedata) {
		return this._http.post<any>('/cakes', cakedata).subscribe(data => {
			console.log(data)
		})
	}

	addRating(id, reviewdata) {
		return this._http.post<any>(`/cakes/${id}`, reviewdata).subscribe(data => {
			console.log(data)
		})
	}
}