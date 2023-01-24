import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CustomInterceptor } from './custom.interceptor';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { CourseListModule } from './course-list/course-list.module';
import { CreateCourseModule } from './create-course/create-course.module';
import { PaginationModule } from './pagination/pagination.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CourseListModule,
    CreateCourseModule,
    PaginationModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:CustomInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
