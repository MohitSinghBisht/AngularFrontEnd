import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PaginationComponent } from "./pagination.component";


@NgModule({
    declarations: [
        PaginationComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
    ],
})
export class PaginationModule{ }