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
projectForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    persons: new FormControl(''),
    type: new FormControl(''),
    imgUrl: new FormControl(''),
    file: new FormControl('')
  });
selected;
  constructor(private projetService: ProjetService, private dialogRef: MatDialogRef<EditProjectModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fileService: FileService) {
  }


  ngOnInit() {
    console.log(this.data.projet)
  this.projectForm.patchValue({
    title: this.data.projet.title,
    description: this.data.projet.description,
    persons: this.data.projet.persons,
    type: this.data.projet.type,
    imgUrl: this.data.projet.imgUrl,
    file: this.data.projet.file
  });
  console.log(this.data.type)
  const toSelect = this.data.type.find(t => t.id == this.projectForm.value.type.id);
  this.projectForm.get('type').setValue(toSelect);
}

  editProjet() {
     this.projectForm.patchValue({
       type: '/api/types/'+this.projectForm.value.type.id
     });
    this.dialogRef.close(this.projectForm.value);
  }

  onFileSelected(files: any) {
    let formData:FormData = new FormData();
    formData.append("file", files[0],files[0].name);
    this.fileService.upload(formData).subscribe();
    this.projectForm.patchValue({
      imgUrl: files[0].name});
  }


}
