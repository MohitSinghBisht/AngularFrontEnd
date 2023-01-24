import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateCourseComponent } from './create-course/create-course.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'create-course',component:CreateCourseComponent,canActivate:[AuthGuard]},
{path:'',redirectTo:'login',pathMatch:'full'},
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
