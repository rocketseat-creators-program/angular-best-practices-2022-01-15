import { Component, OnInit } from '@angular/core';
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

  private loadStudents() {
    this.studentsService.findAll().subscribe(response => {
      this.students = response;
    });
  }

}
