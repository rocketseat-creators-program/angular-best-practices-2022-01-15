import { Component, Input } from '@angular/core';
import { Course } from 'src/app/features/courses/course';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.css']
})
export class CourseCardListComponent {

  @Input()
  courses!: Course[];

  constructor() { }

  trackByCourseId(index: number, course: Course) {
    return course.id;
  }

}
