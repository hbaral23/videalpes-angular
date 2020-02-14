import {Component, Inject, OnInit} from '@angular/core';
import {TypeService} from '../../../Service/type.service';
import {ProjetService} from '../../../Service/projet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FileService} from "../../../Service/file.service";

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.scss']
})
export class AddProjectModalComponent implements OnInit {

  type: [] = [];
  fileName: string ='';

  projectForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    persons: new FormControl(''),
    type: new FormControl(''),
    file: new FormControl(),
    imgUrl: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<AddProjectModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private typeService: TypeService,
              private projectService: ProjetService, private fileService: FileService) {
  }

  ngOnInit() {
    this.type = this.data.type;
    console.log(this.type);
  }

  save() {
    console.log(this.projectForm.value);
    this.projectService.create(this.projectForm.value).subscribe(data => {
      this.dialogRef.close(data);
    });
  }

  onFileSelected(files: any) {
    console.log(files[0]);
    let formData:FormData = new FormData();
    formData.append("file", files[0],files[0].name);
    this.fileService.upload(formData).subscribe();
    this.projectForm.patchValue({imgUrl: files[0].name});
  }

}
