import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListprojectComponent} from './listproject.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListprojectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ListprojectModule { }
