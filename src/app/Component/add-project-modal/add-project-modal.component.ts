import {Component, Inject, OnInit} from '@angular/core';
import {TypeService} from "../../../Service/type.service";
import {ProjetService} from "../../../Service/projet.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.scss']
})
export class AddProjectModalComponent implements OnInit {

  projectForm = new FormGroup({
    title : new FormControl(''),
    description: new FormControl(''),
    persons: new FormControl(''),
    type: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<AddProjectModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private typeService: TypeService, private projectService: ProjetService) { }

  type: [] = [];

  ngOnInit() {
    this.type = this.data.type;
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectService.create(this.projectForm.value).subscribe(data => {
      this.dialogRef.close(data);
    });
  }

}
