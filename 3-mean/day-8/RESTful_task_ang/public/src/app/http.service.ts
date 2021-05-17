import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	constructor(private _http: HttpClient){}
	getTasks(){
		return this._http.get<{title:string,description:string}[]>('/tasks');
	}

	addTask(newtask) {
		console.log(newtask)
		return this._http.post<any>('/tasks', newtask).subscribe(data => {
			console.log(data)
		})
	}
}