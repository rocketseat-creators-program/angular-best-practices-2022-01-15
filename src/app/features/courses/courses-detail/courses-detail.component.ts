import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { differenceInYears, parseISO } from 'date-fns';
import { Student } from '../../students/student';
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

  studentShortName(student: Student) {
    const names = student.name.split(' ');
    return names.length > 1 ? `${names.shift()} ${names.pop()}` : student.name;
  }

  studentAge(student: Student, suffix?: string) {
    const age = differenceInYears(Date.now(), parseISO(student.birthday));
    return suffix ? `${age} ${suffix}` : age;
  }

}
