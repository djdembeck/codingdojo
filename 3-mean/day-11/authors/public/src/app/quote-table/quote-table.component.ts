import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-quote-table",
	templateUrl: "./quote-table.component.html",
	styleUrls: ["./quote-table.component.styl"],
})
export class QuoteTableComponent implements OnInit {
	editAuthor: any;
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
	}

	getThisAuthor(id) {
		const observable = this._httpService.showAuthor(id);
		observable.subscribe((data) => {
			console.log("Got our author!", data);
			this.editAuthor = data;
		});
	}

	onVoteClick(quote, increment) {
		this._httpService.vote(quote, this.editAuthor._id, increment).subscribe((data) => {
			console.log(data);
			this.reloadCurrentRoute();

		});
	}

	reloadCurrentRoute() {
		let currentUrl = `/quotes/${this.editAuthor._id}`;
		this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
			this._router.navigate([currentUrl]);
		});
	}

	onDeleteClick(quote) {
		this._httpService.deleteQuote(quote._id, this.editAuthor._id).subscribe((data) => {
			console.log(data);
			this.reloadCurrentRoute();
		});
	}
}
