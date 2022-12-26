import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { Company } from '../company';
import { website } from '../website';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent  implements OnInit{
  id:number;
  cour:Course=new Course();
  Comp:Company=new Company();
  webl:website=new website();
  addweb:website[]=[];
  error:null;
  
  
  constructor(private cours:CourseService,
    private route:ActivatedRoute,
    private router:Router){

  }

  ngOnInit() {
    this.webl=new website();
    this.addweb.push(this.webl);
    this.id=this.route.snapshot.params['id'];
  }

  addWebsite(){
    this.webl=new website();

    this.addweb.push(this.webl);
  }
  removeWebiste(i:number){
    this.addweb.splice(i, 1);
  }



  OnSubmit(){
    this.saveCourse();
    
  }

  saveCourse(){
    this.cour.provider=this.Comp;
    this.cour.weblist=this.addweb;
    this.cours.updateCourse(this.cour).subscribe(data=>{
      this.Gotocourselist();
    },error=>{this.error=error.error})
  }

  Gotocourselist(){
    this.router.navigate(['/courses']);
  }


}
