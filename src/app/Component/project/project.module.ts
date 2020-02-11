import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectComponent} from './project.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
