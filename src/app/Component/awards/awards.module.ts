import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AwardsComponent} from './awards.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddAwardModalComponent} from '../add-award-modal/add-award-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [AwardsComponent,
    AddAwardModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    AddAwardModalComponent
  ],
})
export class AwardsModule { }
