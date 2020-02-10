import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ButtonModule } from 'primeng/primeng';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public profileForm: FormGroup;
  hide = true;

  constructor() { 
    this.profileForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }); 
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.profileForm.valid) {
       // if (this.authservice.login(this.profileForm.value.login, this.profileForm.value.password))
    }
  }
  
  clicktest(e) {
    console.log('hide txt');
  }
}
