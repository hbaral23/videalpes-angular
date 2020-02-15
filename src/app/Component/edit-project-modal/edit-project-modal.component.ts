import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProjetService} from "../../../Service/projet.service";
import {FileService} from "../../../Service/file.service";

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.scss']
})
export class EditProjectModalComponent implements OnInit {

  constructor(private projetService: ProjetService, private dialogRef: MatDialogRef<EditProjectModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fileService: FileService) {
  }

  projectForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    persons: new FormControl(''),
    type: new FormControl(''),
    imgUrl: new FormControl(''),
    file: new FormControl('')
  });

  ngOnInit() {
  }

  editProjet() {
    this.dialogRef.close(this.projectForm.value);
  }

  onFileSelected(files: any) {
    console.log(files[0]);
    let formData:FormData = new FormData();
    formData.append("file", files[0],files[0].name);
    this.fileService.upload(formData).subscribe();
    this.projectForm.patchValue({imgUrl: files[0].name});
  }


}
