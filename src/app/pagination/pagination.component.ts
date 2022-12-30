import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Info } from '../info';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})


export class PaginationComponent implements OnInit{

  info: Info=new Info();
  cl:any
  flag:boolean=true;
  sizer:number;


  constructor(private courseservice:CourseService,
    private router:Router){
  
  }

  ngOnInit() {
    
  }

pagsub(){
  this.courseservice.pagination(this.info).subscribe(data=>{
    console.log(data);
    this.cl=data;
  },error=>console.error()
  )

}

setvalueforHidden(){
  this.flag=!this.flag
}

setmyvalue(){
 if(this.info.pageSize>=2){
  this.info.pageSize--;
  console.log(this.info.pageSize)
  this.pagsub();
 }
}

setvalue(){
  if(this.info.pageSize<=this.info.limit){
  this.info.pageSize++;
  this.pagsub();
}
}


sorttype(tos:any){
  this.info.shortType=tos;
  this.pagsub();
}


sortfield(sot:any){
  this.info.shortField=sot;
  this.pagsub();
}

searchvalue(dsa:any){
this.info.searchitem=dsa;
this.pagsub();
}

  

}
