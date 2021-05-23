import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-author-add",
	templateUrl: "./author-add.component.html",
	styleUrls: ["./author-add.component.styl"],
})
export class AuthorAddComponent implements OnInit {
	error_set: any;
	newAuthor: { name: string };
	constructor(private _router: Router, private _httpService: HttpService) {}

	ngOnInit() {
		this.newAuthor = { name: "" };
	}

	onSubmit() {
		this._httpService
			.newAuthor({ name: this.newAuthor["name"] })
			.subscribe((data) => {
				console.log(data);
				if (data.errors) {
					this.error_set = data.errors
				} else {
					this._router.navigate(["/"]);
				}
			});
		this.newAuthor = { name: "" };
	}
}
