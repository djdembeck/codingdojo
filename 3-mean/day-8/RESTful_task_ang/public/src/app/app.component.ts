import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})

export class AppComponent {
	title = 'public';
	constructor(private _httpService: HttpService){}
	tasks: {title:string,description:string}[] = [];
	// Alternate way of init:
	// tasks: Array<{title:string,description:string}> = [];
	getTasksFromService(){
		const observable = this._httpService.getTasks();
		observable.subscribe(data => {
			console.log("Got our tasks!", data)
			this.tasks = data;
		});
	}
	onButtonClick(event) {
		this.getTasksFromService();
	}
	num: Number;
	onButtonClickParam(num: Number) {
		this.num = num;
	}
}