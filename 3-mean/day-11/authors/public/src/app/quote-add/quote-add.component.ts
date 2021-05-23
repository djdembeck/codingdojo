import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-quote-add",
	templateUrl: "./quote-add.component.html",
	styleUrls: ["./quote-add.component.styl"],
})
export class QuoteAddComponent implements OnInit {
	editAuthor: any;
	error_set: any;
	newQuote: any;
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _httpService: HttpService
	) {}

	author_context: any;
	ngOnInit() {
		this._route.params.subscribe((params) => {
			this.author_context = params["id"];
			this.getThisAuthor(this.author_context);
		});
		this.newQuote = {content: "", votes: 0};
	}

	getThisAuthor(id) {
		const observable = this._httpService.showAuthor(id);
		observable.subscribe((data) => {
			console.log("Got our author!", data);
			this.editAuthor = data;
		});
	}

	onSubmit() {
		this._httpService
			.newQuote({ content: this.newQuote["content"], votes: this.newQuote["votes"] }, this.editAuthor._id)
			.subscribe((data) => {
				console.log(data);
				if (data.errors) {
					this.error_set = data.errors
				} else {
					this._router.navigate([`/quotes/${this.editAuthor._id}`]);
				}				
			});
			this.newQuote = {content: "", votes: 0};
	}
}
