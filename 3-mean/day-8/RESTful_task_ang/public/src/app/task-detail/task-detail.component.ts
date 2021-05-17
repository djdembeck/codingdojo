import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.styl']
})
export class TaskDetailComponent implements OnInit {
	@Input() taskToShow: any;
  constructor() { }

  ngOnInit() {
  }

}