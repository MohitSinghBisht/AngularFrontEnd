import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent  implements OnInit {
  task:string;
  courseList: Course[]=new Array();
  constructor(private route:ActivatedRoute,
   private serv:CourseService){
 
   } 
   ngOnInit() {
   this.task=this.route.snapshot.params['title'];
   this.serv.SortByTitle(this.task).subscribe(data=>{
     // this.courseList=data;
     this.courseList=data;
     console.log(data);
   },error=>console.error());
 }

//  sort(){
//   this.courseservice.SortByTitle(this.task).subscribe(data=>{
//     console.log(data);
//     this.getCourseList()});
//   }


}
