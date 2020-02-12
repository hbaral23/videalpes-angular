import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.scss']
})
export class EditProjectModalComponent implements OnInit {

  constructor() { }

  projectForm = new FormGroup({
    title : new FormControl(''),
    description: new FormControl(''),
    persons: new FormControl(''),
    type: new FormControl('')
  });

  ngOnInit() {
  }

}
