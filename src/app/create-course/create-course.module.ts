import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CreateCourseComponent } from "./create-course.component";


@NgModule({
    declarations: [
        CreateCourseComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
    ],
})
export class CreateCourseModule{ }