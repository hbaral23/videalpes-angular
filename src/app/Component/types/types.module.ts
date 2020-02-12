import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesComponent } from './types.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule, MatProgressSpinnerModule,
  MatSelectModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {AddTypeModalComponent} from '../add-type-modal/add-type-modal.component';
import {AddProjectModalComponent} from '../add-project-modal/add-project-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditTypeModalComponent} from '../edit-type-modal/edit-type-modal.component';



@NgModule({
  declarations: [TypesComponent, AddTypeModalComponent, EditTypeModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule
  ],
  entryComponents: [
    AddTypeModalComponent,
    EditTypeModalComponent
  ],
})
export class TypesModule { }
