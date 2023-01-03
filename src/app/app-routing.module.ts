import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [
{path:'courses',component:CourseListComponent},
{path:'create-course',component:CreateCourseComponent},
{path:'',redirectTo:'courses',pathMatch:'full'},
{path:'update-course/:id',component:UpdateCourseComponent},
{path:'view-course/:id',component:ViewCourseComponent},
{path:'show-page',component:PaginationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
