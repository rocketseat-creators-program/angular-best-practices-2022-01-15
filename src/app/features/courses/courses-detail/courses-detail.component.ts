import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit {

  course!: Course;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const { course } = this.activatedRoute.snapshot.data;

    this.course = course;
  }

}
