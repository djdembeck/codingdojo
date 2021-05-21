import { AuthorAddComponent } from "./author-add/author-add.component";
import { AuthorEditComponent } from "./author-edit/author-edit.component";
import { AuthorTableComponent } from "./author-table/author-table.component";
import { QuoteAddComponent } from "./quote-add/quote-add.component";
import { QuoteTableComponent } from "./quote-table/quote-table.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{ path: "", component: AuthorTableComponent },
	{ path: "new", component: AuthorAddComponent },
	{ path: "quotes/:id", component: QuoteTableComponent },
	{ path: "new_quote/:id", component: QuoteAddComponent },
	{ path: "edit/:id", component: AuthorEditComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
