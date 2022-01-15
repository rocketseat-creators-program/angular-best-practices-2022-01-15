import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-new',
  templateUrl: './courses-new.component.html',
  styleUrls: ['./courses-new.component.css']
})
export class CoursesNewComponent implements OnInit {

  course!: Course;
  courseForm!: FormGroup;

  constructor(
    private router: Router,
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
    this.coursesService.save(this.courseForm.value).subscribe(() => {
      this.router.navigateByUrl("/courses");
    });
  }

  private buildForm() {
    this.courseForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

}
