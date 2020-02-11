import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProjetService} from "../../../Service/projet.service";
import {TypeService} from "../../../Service/type.service";

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.scss']
})
export class ListprojectComponent implements OnInit {

  projectForm = new FormGroup({
    title : new FormControl(''),
    description: new FormControl(''),
    persons: new FormControl(''),
    // type: new FormControl('')
  });

  type: [] = [];
  project : [] = [];

  constructor(private formBuilder: FormBuilder, private projectService: ProjetService, private typeService: TypeService) { }

  ngOnInit() {
    // this.typeService.get().subscribe(data => {
    //     this.type = data['hydra:member'];
    //     console.log(this.type);
    // });
    this.projectService.get().subscribe(data => {
      console.log(data['hydra:member']);
      this.project = data['hydra:member'];
    })
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectService.create(this.projectForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
