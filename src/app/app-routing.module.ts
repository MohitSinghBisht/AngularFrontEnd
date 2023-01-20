import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'courses',component:CourseListComponent,canActivate:[AuthGuard]},
{path:'create-course',component:CreateCourseComponent,canActivate:[AuthGuard]},
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'update-course/:id',component:UpdateCourseComponent,canActivate:[AuthGuard]},
{path:'view-course/:id',component:ViewCourseComponent,canActivate:[AuthGuard]},
{path:'show-page',component:PaginationComponent,canActivate:[AuthGuard]},
{path:'logout',component:LogoutComponent},
{path:'signup',component:SignupComponent},
// {path:'**',redirectTo:'login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
