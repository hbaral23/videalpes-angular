import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProjetService} from "../../../Service/projet.service";

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.scss']
})
export class EditProjectModalComponent implements OnInit {

  constructor(private projetService: ProjetService, private dialogRef: MatDialogRef<EditProjectModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  projectForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    persons: new FormControl(''),
    type: new FormControl('')
  });

  ngOnInit() {
  }

  editProjet(id) {
    this.dialogRef.close('données modifiées');
    this.projetService.edit(id, this.projectForm.value).subscribe(res => {
    });
    location.reload();
  }


}
