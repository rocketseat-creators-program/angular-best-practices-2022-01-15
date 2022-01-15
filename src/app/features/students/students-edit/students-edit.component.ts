import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from '../../courses/course';
import { CoursesService } from '../../courses/courses.service';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {

  courses!: Course[];
  student!: Student;
  studentForm!: FormGroup;

  constructor(
    private location: Location,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    const { student } = this.activatedRoute.snapshot.data;
    this.student = student;

    this.buildForm();
    this.loadCourses();
  }

  goBack() {
    return this.location.back();
  }

  onSubmit() {
    this.studentsService.update(this.student.id, this.studentForm.value).subscribe(() => {
      this.toastr.success('Student updated successfully!');
      this.goBack();
    });
  }

  onDelete() {
    this.studentsService.delete(this.student.id).subscribe(() => {
      this.toastr.success('Student deleted successfully!');
      this.goBack();
    });
  }

  private buildForm() {
    this.studentForm = this.formBuilder.group({
      name: [this.student.name, Validators.required],
      email: [this.student.email, Validators.required],
      birthday: [this.student.birthday, Validators.required],
      courseId: [this.student.courseId, Validators.required]
    });
  }

  private loadCourses() {
    this.coursesService.findAll().subscribe(response => {
      this.courses = response;
    });
  }

}
