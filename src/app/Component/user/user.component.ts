import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Checkbox } from '../../../../node_modules/primeng/checkbox';
import { RadioButtonModule } from '../../../../node_modules/primeng/radiobutton';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public profileForm: FormGroup;

  constructor() {  
  this.profileForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  }); }

  ngOnInit() {
  }


  
  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
