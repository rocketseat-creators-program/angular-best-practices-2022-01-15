import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit {

  course!: Course;
  courseForm!: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    const { course } = this.activatedRoute.snapshot.data;
    this.course = course;

    this.buildForm();
  }

  onSubmit() {
    this.coursesService.update(this.course.id, this.courseForm.value).subscribe(() => {
      this.toastr.success('Course updated successfully!');
      this.router.navigateByUrl("/courses");
    });
  }

  onDelete() {
    this.coursesService.delete(this.course.id).subscribe(() => {
      this.toastr.success('Course deleted successfully!');
      this.router.navigateByUrl("/courses");
    });
  }

  private buildForm() {
    this.courseForm = this.formBuilder.group({
      name: [this.course.name, Validators.required],
      description: [this.course.description, Validators.required]
    });
  }

}
