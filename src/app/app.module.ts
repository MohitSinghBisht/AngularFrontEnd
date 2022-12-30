import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    DeleteCourseComponent,
    ViewCourseComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
