import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-searching-view',
  templateUrl: './searching-view.component.html',
  styleUrls: ['./searching-view.component.css']
})
export class SearchingViewComponent implements OnInit {
 title:string;
 courseList: Course[]=new Array();
 constructor(private route:ActivatedRoute,
  private serv:CourseService){

  } 
  ngOnInit() {
  this.title=this.route.snapshot.params['title'];
  this.serv.getCourseByTitle(this.title).subscribe(data=>{
    // this.courseList=data;
    this.courseList=data;
    console.log(data);
  },error=>console.error());
}
}
