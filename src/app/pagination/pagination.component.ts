import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  constructor(private courseservice:CourseService,
    private router:Router){
  
  }


  ngOnInit() {
    
  }

  coursesList: Course[]=new Array();
 
 showPage(){
    this.courseservice.getCourseList().subscribe(data=>{
      console.log(data);
      this.coursesList=data;
      
    },error=>console.error());
  
  }
  

}
