import { Component, OnInit } from "@angular/core";
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
	selector: "app-author-table",
	templateUrl: "./author-table.component.html",
	styleUrls: ["./author-table.component.styl"],
})
export class AuthorTableComponent implements OnInit {
	constructor(
		private _router: Router,
		private _httpService: HttpService
		){}

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

	onDeleteClick(author) {
		this._httpService.deleteAuthor(author._id).subscribe(data => {
			console.log(data)
			this._router.navigate(['/'])
		})
	}
}