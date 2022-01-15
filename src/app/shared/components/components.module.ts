import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { StudentCardListComponent } from './student-card-list/student-card-list.component';
import { SelectCourseComponent } from './select-course/select-course.component';
import { FormsModule } from '@angular/forms';
import { CourseCardListComponent } from './course-card-list/course-card-list.component';

@NgModule({
  declarations: [
    SelectCourseComponent,
    CourseCardListComponent,
    StudentCardListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    SelectCourseComponent,
    CourseCardListComponent,
    StudentCardListComponent
  ]
})
export class ComponentsModule { }
