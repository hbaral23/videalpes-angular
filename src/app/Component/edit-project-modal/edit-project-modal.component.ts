import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.scss']
})
export class EditProjectModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  projectForm = new FormGroup({
    title : new FormControl(''),
    description: new FormControl(''),
    persons: new FormControl(''),
    type: new FormControl('')
  });

  ngOnInit() {
  }

}
