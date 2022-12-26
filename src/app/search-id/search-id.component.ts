import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIdComponent implements OnInit {
  id:number;
  coursesList: Course[]=new Array();
  constructor(private router:ActivatedRoute,
   private sv:CourseService){
 
   } 
   ngOnInit() {
   this.id=this.router.snapshot.params['id'];
   this.sv.findByCourseId(this.id).subscribe(data=>{
     this.coursesList=data;
     console.log(data);
   },error=>console.error());
 }
 
}
 
