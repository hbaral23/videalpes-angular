import { Component, OnInit } from '@angular/core';
import {TypeService} from "../../Service/type.service";
import {ProjetService} from "../../Service/projet.service";
import {FormControl, FormGroup} from "@angular/forms";

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

  constructor(private typeService: TypeService, private projectService: ProjetService) { }

  type: [] = [];

  ngOnInit() {
    this.typeService.get().subscribe(data => {
      this.type = data['hydra:member'];
    });
  }

  onSubmit(){
    console.log(this.projectForm.value);
    this.projectService.create(this.projectForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
