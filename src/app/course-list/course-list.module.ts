import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UpdateCourseComponent } from "../update-course/update-course.component";
import { ViewCourseComponent } from "../view-course/view-course.component";
import { CourseListComponent } from "./course-list.component";
import { CourseListRoutingModule } from "./course-list.routing.module";


@NgModule({
    declarations: [
     CourseListComponent,
     UpdateCourseComponent,
     ViewCourseComponent,
    ],
    imports: [
     RouterModule,
     CommonModule,
     CourseListRoutingModule,
     FormsModule,
    ],
})
export class CourseListModule{ }