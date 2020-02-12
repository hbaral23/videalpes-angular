import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DeleteItemModalComponent} from './delete-item-modal.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {AddProjectModalComponent} from '../add-project-modal/add-project-modal.component';



@NgModule({
  declarations: [DeleteItemModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    DeleteItemModalComponent
  ],
})
export class DeleteItemModalModule { }
