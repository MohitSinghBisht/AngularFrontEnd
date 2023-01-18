import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { JwtAuthRequest } from '../JwtAuthRequest';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  jwt:JwtAuthRequest=new JwtAuthRequest();
  token:string;
  constructor(private cd:CourseService,private r:Router){
  }

ngOnInit() {

}

Auth(user: any,pass: any) {
this.jwt.username=user;
this.jwt.password=pass;
console.log(this.jwt);
this.cd.createToken(this.jwt).subscribe((data:any)=>{
console.log(data);
localStorage.setItem('token',data.token);
this.r.navigateByUrl('/courses');
},error=>console.error()
)


}

}
