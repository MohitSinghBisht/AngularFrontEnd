import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';
import { Info } from './info';
import { JwtAuthRequest } from './JwtAuthRequest';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})

export class CourseService{

  private baseURL="http://localhost:8080/courses";
  constructor(private httpClient:HttpClient) {}
  
  createToken(jwt:JwtAuthRequest):Observable<any>{
    return this.httpClient.post(`${this.baseURL}/login`,jwt);
    }

   createUser(us:User):Observable<any>{
    return this.httpClient.post(`${this.baseURL}/Signup`,us);
   } 

  getCourseList():Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}`); 
}

  createCourse(cour:Course):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}/add`,cour);
  }

  getCourseById(id:number):Observable<Course>{
    return this.httpClient.get<Course>(`${this.baseURL}/${id}`);
  }
  updateCourse(cour:Course):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update`,cour);
  }
  
  deletecourse(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/del/${id}`);
  }

  pagination(info:Info):Observable<Object>{
    console.log(info);
    return this.httpClient.post(`${this.baseURL}/pagination`,info);
  }

  isloggedin(){
    return localStorage.getItem('token')!=null;
  }
  

}


