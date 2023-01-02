import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';
import { Info } from './info';
import { Page } from './page';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseURL="http://localhost:8080/courses";
  constructor(private httpClient:HttpClient) {}


  getCourseList():Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}`);
    
}

  createCourse(cour:Course):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,cour);
  }

  getCourseById(id:number):Observable<Course>{
    return this.httpClient.get<Course>(`${this.baseURL}/${id}`);
  }
  
  findByCourseId(id:number):Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}/search-id/${id}`);
  }

  getCourseByTitle(title:string):Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}/search-title/${title}`);
  }

  SortByTitle(task:string):Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}/sort/${task}`);
  }

  updateCourse(cour:Course):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,cour);
  }
  
  deletecourse(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  pagination(info:Info):Observable<Object>{
    console.log(info);
    return this.httpClient.post(`${this.baseURL}/pagination`,info);
  }

}


