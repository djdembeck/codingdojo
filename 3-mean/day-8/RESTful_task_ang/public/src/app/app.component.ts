import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})

export class AppComponent implements OnInit {
	title = 'public';
	constructor(private _httpService: HttpService){}
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}
	tasks: any = [];
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