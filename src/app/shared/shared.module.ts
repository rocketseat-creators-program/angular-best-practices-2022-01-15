import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseCardListComponent } from './components/course-card-list/course-card-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CourseCardListComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    CourseCardListComponent
  ]
})
export class SharedModule { }
