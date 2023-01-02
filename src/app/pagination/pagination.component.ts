import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Info } from '../info';
import { Page } from '../page';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})


export class PaginationComponent implements OnInit{

  info: Info=new Info();
  cl:Page=new Page();
  flag:boolean=true;


  constructor(private courseservice:CourseService,
    private router:Router){
  
  }

  ngOnInit() {
    
  }

pagsub(){
  this.courseservice.pagination(this.info).subscribe((data:any)=>{
    //console.log(data.mylist);
    console.log(data);
   this.cl.mylist=data.mylist;
   this.cl.count=data.count;
   this.cl.lastPage=data.lastPage; 
   this.cl.pageSize=data.pageSize;
   this.cl.limit=data.limit;
   console.log(this.cl);
    
  },error=>console.error()
  )

}

setvalueforHidden(){
  this.flag=!this.flag
}

setmyvalue(){
 if(this.cl.pageSize>1){
  this.info.pageSize--;
  this.pagsub();
  console.log(this.cl.pageSize);
 }
}

setvalue(){
 
  if(this.cl.pageSize<=(this.cl.lastPage-1)){
  this.info.pageSize++;
  this.pagsub();
  console.log(this.cl.pageSize);
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

setlimit(dam:any){
this.info.limit=dam;
this.pagsub();
}

}
