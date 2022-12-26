import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { FormControl,FormGroup,NgForm,Validators } from '@angular/forms';
import { Company } from '../company';
import { website } from '../website';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  cour:Course=new Course();
  error:null;
  Comp:Company=new Company();
  webl:website=new website();
  addweb:website[]=[];
  
  constructor(private cons:CourseService,
    private route:Router){
      
  }                                                                     
  // var numbers = new Array(1, 4, 9); 
  // var length = numbers.push(10); 
  // console.log("new numbers is : " + numbers );  
  // length = numbers.push(20); 
  // console.log("new numbers is : " + numbers );

  // addrss: AddressData=new AddressData();

  // addArray: AddressData[]=[];




  ngOnInit() {
    this.webl=new website();

    this.addweb.push(this.webl);
  }

  OnSubmit(){
    this.saveCourse();
  }

  addWebsite(){
    this.webl=new website();

    this.addweb.push(this.webl);
  }
  removeWebiste(i:number){
    this.addweb.splice(i, 1);
  }
  saveCourse(){
    this.cour.provider=this.Comp;
    this.cour.weblist=this.addweb;
    this.cons.createCourse(this.cour).subscribe(data=>{
      this.Gotocourselist();
    },error=>{this.error=error.error})
    //},error=>{this.error=error.error})
  }

  Gotocourselist(){
    this.route.navigate(['/courses']);
  }
  




  loginForm=new FormGroup({
    CourseId:new FormGroup('',Validators.required),
    Title:new FormGroup('',Validators.required),
  })
}
