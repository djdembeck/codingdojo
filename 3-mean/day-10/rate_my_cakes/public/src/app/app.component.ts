import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.styl']
})

export class AppComponent implements OnInit {
	title = 'public';
	newCake: { baker: string; img: string; desc: string; };
	constructor(private _httpService: HttpService){}

	ngOnInit() {
		this.newCake = {baker: "", img: "", desc: ""}
		this.getCakesFromService();
	}
	
	cakes: {baker:string,img:string,desc:string}[] = [];
	// Alternate way of init:
	// tasks: Array<{title:string,description:string}> = [];
	getCakesFromService(){
		const observable = this._httpService.getCakes();
		observable.subscribe(data => {
			console.log("Got our cakes!", data)
			this.cakes = data;
		});
	}

	selectedTask: any;
	taskToShow(task) {
		this.selectedTask = task;
	}

	onSubmit() {
		this._httpService.addCake({'baker':this.newCake['baker'], 'img':this.newCake['img'], 'desc':this.newCake['desc']})
		this.newCake = {baker: "", img: "", desc: ""}
	}
}