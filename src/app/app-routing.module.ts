import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { SearchingViewComponent } from './searching-view/searching-view.component';
import { SortComponent } from './sort/sort.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [
{path:'courses',component:CourseListComponent},
{path:'create-course',component:CreateCourseComponent},
{path:'',redirectTo:'courses',pathMatch:'full'},
{path:'update-course/:id',component:UpdateCourseComponent},
{path:'delete-course/:id',component:DeleteCourseComponent},
{path:'view-course/:id',component:ViewCourseComponent},
{path:'search-course/:title',component:SearchingViewComponent},
{path:'search-id/:id',component:SearchIdComponent},
{path:'sort-me',component:SortComponent},
{path:'show-page',component:PaginationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
