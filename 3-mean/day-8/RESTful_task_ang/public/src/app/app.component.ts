import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})

export class AppComponent implements OnInit {
	title = 'public';
	newTask: any;
	constructor(private _httpService: HttpService){}

	ngOnInit() {
		this.newTask = { title: "", description: "" }
	}
	
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

	onSubmit() {
		this._httpService.addTask({'title':this.newTask['title'], 'description':this.newTask['description']})
		this.newTask = { title: "", description: ""}
	}
}