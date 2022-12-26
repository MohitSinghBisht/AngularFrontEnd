import { Component } from '@angular/core';
import { OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit{
  id:number;
  cour:Course;

 constructor(private route:ActivatedRoute,
  private serv:CourseService){} 
  
  
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.cour=new Course();
    this.serv.getCourseById(this.id).subscribe(data=>{
      this.cour=data;
    }

    )
  }


}
