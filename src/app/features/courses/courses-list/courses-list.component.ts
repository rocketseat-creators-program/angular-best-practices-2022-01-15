import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Course[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  refresh() {
    this.loadCourses();
  }

  private loadCourses() {
    this.coursesService.findAll().subscribe(response => {
      this.courses = response;
    });
  }

}
