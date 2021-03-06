import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/model/courses';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 public course!:Courses[];
  constructor(private courseService:CoursesService) {}

  ngOnInit():void{
    this.course=this.courseService.getCourses();
  }
}
