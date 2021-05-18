import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.styl']
})
export class DetailsComponent implements OnInit {
	@Input() cakeToShow: any;
	newRating: { stars: number; content: string; };
	constructor(private _httpService: HttpService){}

  ngOnInit() {
	this.newRating = {stars: 0, content: ""}
  }
  
  submitRating(id) {
	this._httpService.addRating(id, {'stars':this.newRating['stars'], 'content':this.newRating['content']})
	this.newRating = {stars: 0, content: ""}
}
}
