import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	constructor(private _http: HttpClient){}
	getTasks(){
		return this._http.get<{title:string,description:string}[]>('/tasks');
	}

	addTask(newtask) {
		console.log(newtask)
		return this._http.post<any>('/tasks', newtask).subscribe(data => {
			console.log(data)
		})
	}

	updateTask(updatetask, task_id) {
		return this._http.put<any>(`/tasks/${task_id}`, updatetask).subscribe(data => {
			console.log(data)
		})
	}

	delTask(task_id) {
		return this._http.delete("/tasks/" + `${task_id}`).subscribe(data => {
			console.log(data)
		})
	}
}