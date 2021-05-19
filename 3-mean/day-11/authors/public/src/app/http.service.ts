import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: "root",
})
export class HttpService {
	constructor(private _http: HttpClient){}
	getAuthors(){
		return this._http.get<{name:string}[]>('/authors');
	}

	newAuthor(newauthor) {
		console.log(newauthor)
		return this._http.post<any>('/authors', newauthor)
	}

	editAuthor(updated_data) {
		return this._http.put<any>(`/authors/${updated_data._id}`, updated_data);
	}

	showAuthor(author_id) {
		return this._http.get<any>(`/authors/${author_id}`);
	}

	deleteAuthor(author_id) {
		return this._http.delete<any>(`/authors/${author_id}`);
	}
}