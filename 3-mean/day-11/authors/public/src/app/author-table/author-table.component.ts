import { Component, OnInit } from "@angular/core";
import { HttpService } from '../http.service';

@Component({
	selector: "app-author-table",
	templateUrl: "./author-table.component.html",
	styleUrls: ["./author-table.component.styl"],
})
export class AuthorTableComponent implements OnInit {
	constructor(private _httpService: HttpService){}

	ngOnInit() {
		this.getAuthorsFromService();
	}
	
	authors: {name:string}[] = [];
	getAuthorsFromService(){
		const observable = this._httpService.getAuthors();
		observable.subscribe(data => {
			console.log("Got our authors!", data)
			this.authors = data;
		});
	}
}
