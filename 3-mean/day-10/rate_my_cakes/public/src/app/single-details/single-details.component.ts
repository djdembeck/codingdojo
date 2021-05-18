import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-details',
  templateUrl: './single-details.component.html',
  styleUrls: ['./single-details.component.styl']
})
export class SingleDetailsComponent implements OnInit {
	@Input() cakeToShow: any;
	constructor() { }

	ngOnInit() {}

	avgRating(cake) {
		let sum = 0;
		for (let i = 0; i < cake.ratings.length; i++) {
			if (cake.ratings[i].stars >= 0) {
				sum += cake.ratings[i].stars
			}
		}
		let calcAvg = (sum / cake.ratings.length) 
		return calcAvg;
	}
}