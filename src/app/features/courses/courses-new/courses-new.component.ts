import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-new',
  templateUrl: './courses-new.component.html',
  styleUrls: ['./courses-new.component.css']
})
export class CoursesNewComponent implements OnInit {

  courseForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
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
