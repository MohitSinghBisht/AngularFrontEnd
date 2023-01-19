import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { User } from '../User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
ud:User=new User();
constructor(private r:CourseService,private da:Router){

}

  ngOnInit(){
  
}

createuser(id: any,user: any,pass: any) {
  this.ud.userid=id;  
  this.ud.email=user;
    this.ud.password=pass;
    console.log(this.ud);
  this.r.createUser(this.ud).subscribe(data=>{
    console.log(data);
  })
  this.da.navigateByUrl('/login');
}

}
