import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListprojectComponent} from './listproject.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AddAwardModalComponent} from '../add-award-modal/add-award-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [ListprojectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  entryComponents: [
    AddAwardModalComponent
  ],
})
export class ListprojectModule { }
