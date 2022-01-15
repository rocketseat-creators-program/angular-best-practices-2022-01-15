import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsNewComponent } from './students-new/students-new.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentsListComponent,
    StudentsNewComponent,
    StudentsEditComponent
  ],
  imports: [
    ReactiveFormsModule,
    StudentsRoutingModule,

    SharedModule
  ]
})
export class StudentsModule { }
