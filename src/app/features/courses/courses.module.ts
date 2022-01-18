import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { CoursesNewComponent } from './courses-new/courses-new.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CoursesEditComponent,
    CoursesListComponent,
    CoursesDetailComponent,
    CoursesNewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesRoutingModule,

    SharedModule
  ]
})
export class CoursesModule { }
