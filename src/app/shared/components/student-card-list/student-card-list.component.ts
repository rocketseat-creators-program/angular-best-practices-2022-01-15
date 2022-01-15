import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/features/students/student';

@Component({
  selector: 'app-student-card-list',
  templateUrl: './student-card-list.component.html',
  styleUrls: ['./student-card-list.component.css']
})
export class StudentCardListComponent {

  @Input()
  students!: Student[];

  constructor() { }

  trackByStudentId(index: number, student: Student) {
    return student.id;
  }

}
