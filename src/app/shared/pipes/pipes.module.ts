import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './age.pipe';
import { ShortNamePipe } from './short-name.pipe';

@NgModule({
  declarations: [
    AgePipe,
    ShortNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgePipe,
    ShortNamePipe
  ]
})
export class PipesModule { }
