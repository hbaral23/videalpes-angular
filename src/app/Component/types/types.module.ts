import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesComponent } from './types.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {AddTypeModalComponent} from '../add-type-modal/add-type-modal.component';
import {AddProjectModalComponent} from '../add-project-modal/add-project-modal.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TypesComponent, AddTypeModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule
  ],
  entryComponents: [
    AddTypeModalComponent
  ],
})
export class TypesModule { }
