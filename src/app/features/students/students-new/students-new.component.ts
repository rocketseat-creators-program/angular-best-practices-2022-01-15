import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../courses/course';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-new',
  templateUrl: './students-new.component.html',
  styleUrls: ['./students-new.component.css']
})
export class StudentsNewComponent implements OnInit {

  courses!: Course[];
  studentForm!: FormGroup;

  cid?: number;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    const { cid } = this.activatedRoute.snapshot.queryParams;

    if (cid && !isNaN(cid)) {
      this.cid = parseInt(cid);
    }

    this.buildForm();
  }

  get redirectUrl(): string {
    return this.cid ? `/courses/${this.cid}` : "/students";
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentsService.save(this.studentForm.value).subscribe(() => {
        this.router.navigateByUrl(this.redirectUrl);
      });
    }
  }

  private buildForm() {
    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      courseId: [this.cid || undefined, Validators.required]
    });
  }

}
