import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { website } from '../website';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  course: Course[];
  web:website[];
  dat:any;
  id:number;
  title:string;


constructor(private courseservice:CourseService,
  private router:Router){

}

ngOnInit(){

  this.getCourseList();

}

private getCourseList(){
  this.courseservice.getCourseList().subscribe(data=>{
    console.log(data);
    this.course=data;
    
  },error=>console.error());

}

updatecourse(id:number){
this.router.navigate(["update-course",id]);
}


deletecourse(id:number){
  this.courseservice.deletecourse(id).subscribe(data=>{
    this.getCourseList();
  }

  )
}


viewcourse(id:number){
  this.router.navigate(["view-course",id]);
}

searchviewer(e:Event){

  this.dat=(<HTMLInputElement>e.target).value;
  // this.router.navigate(["search-course",title]);
}

sendit(){
  console.log(typeof Number(this.dat));
  if((this.dat).length>1){
    this.title=this.dat;
    this.router.navigate(["search-course",this.title]);
  }
 else{
  this.id=this.dat;
  this.router.navigate(["search-id",this.id]);
   
  }
}
}