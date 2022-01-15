import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgePipe } from './pipes/age.pipe';
import { ShortNamePipe } from './pipes/short-name.pipe';

import { CourseCardListComponent } from './components/course-card-list/course-card-list.component';
import { StudentCardListComponent } from './components/student-card-list/student-card-list.component';
import { SelectCourseComponent } from './components/select-course/select-course.component';


@NgModule({
  declarations: [
    AgePipe,
    ShortNamePipe,
    SelectCourseComponent,
    CourseCardListComponent,
    StudentCardListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    AgePipe,
    ShortNamePipe,
    SelectCourseComponent,
    CourseCardListComponent,
    StudentCardListComponent
  ]
})
export class SharedModule { }
