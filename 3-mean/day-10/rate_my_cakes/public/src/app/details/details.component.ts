import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.styl']
})
export class DetailsComponent implements OnInit {
	@Input() cakesToShow: any;
	@Output() cakeEvent: EventEmitter<number> = new EventEmitter();
	emitCake(cake){
		this.cakeEvent.emit(cake);
	}
	
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
