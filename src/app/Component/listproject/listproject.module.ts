import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListprojectComponent} from './listproject.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AddProjectModalComponent } from "../add-project-modal/add-project-modal.component";
import {EditProjectModalComponent} from "../edit-project-modal/edit-project-modal.component";
import {MatProgressSpinnerModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [ListprojectComponent, AddProjectModalComponent, EditProjectModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
  entryComponents: [
    AddProjectModalComponent,
    EditProjectModalComponent
  ],
})
export class ListprojectModule { }
