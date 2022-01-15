import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsNewComponent } from './students-new/students-new.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    StudentsListComponent,
    StudentsNewComponent,
    StudentsEditComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    StudentsRoutingModule,

    ComponentsModule
  ]
})
export class StudentsModule { }
