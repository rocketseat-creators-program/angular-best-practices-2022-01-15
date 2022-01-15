import { Component, OnInit } from '@angular/core';
import { differenceInYears, parseISO } from 'date-fns';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  refresh() {
    this.loadStudents();
  }

  studentShortName(student: Student) {
    const names = student.name.split(' ');
    return names.length > 1 ? `${names.shift()} ${names.pop()}` : student.name;
  }

  studentAge(student: Student, suffix?: string) {
    const age = differenceInYears(Date.now(), parseISO(student.birthday));
    return suffix ? `${age} ${suffix}` : age;
  }

  private loadStudents() {
    this.studentsService.findAll().subscribe(response => {
      this.students = response;
    });
  }

}
