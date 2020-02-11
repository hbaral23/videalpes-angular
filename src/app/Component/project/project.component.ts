import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import {ProjetService} from '../../../Service/projet.service';
import {TypeService} from '../../../Service/type.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectForm = new FormGroup({
    title : new FormControl(''),
    description: new FormControl(''),
    persons: new FormControl(''),
    type: new FormControl('')
  });

  type: [] = [];


  constructor(private formBuilder: FormBuilder, private projectService: ProjetService, private typeService: TypeService) { }

  ngOnInit() {
    this.typeService.get().subscribe(data => {
        this.type = data['hydra:member'];
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectService.create(this.projectForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
