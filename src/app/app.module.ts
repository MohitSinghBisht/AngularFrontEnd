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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchingViewComponent } from './searching-view/searching-view.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { SortComponent } from './sort/sort.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    DeleteCourseComponent,
    ViewCourseComponent,
    SearchingViewComponent,
    SearchIdComponent,
    SortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   FormsModule,
   ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
