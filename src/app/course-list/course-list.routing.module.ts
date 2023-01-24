import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { UpdateCourseComponent } from "../update-course/update-course.component";
import { ViewCourseComponent } from "../view-course/view-course.component";
import { CourseListComponent } from "./course-list.component";

const routes:Routes=[
    {path:'courses',component:CourseListComponent,canActivate:[AuthGuard]},
    {path:'update-course/:id',component:UpdateCourseComponent,canActivate:[AuthGuard]},
    {path:'view-course/:id',component:ViewCourseComponent,canActivate:[AuthGuard]},
]

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class CourseListRoutingModule{}