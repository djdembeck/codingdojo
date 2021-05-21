import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthorTableComponent } from "./author-table/author-table.component";
import { AuthorAddComponent } from "./author-add/author-add.component";
import { AuthorEditComponent } from "./author-edit/author-edit.component";

import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";
import { FormsModule } from "@angular/forms";
import { QuoteAddComponent } from "./quote-add/quote-add.component";
import { QuoteTableComponent } from "./quote-table/quote-table.component";

@NgModule({
	declarations: [
		AppComponent,
		AuthorTableComponent,
		AuthorAddComponent,
		AuthorEditComponent,
		QuoteAddComponent,
		QuoteTableComponent,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	providers: [HttpService],
	bootstrap: [AppComponent],
})
export class AppModule {}
