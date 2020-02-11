import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public newUserForm: FormGroup;
  hide: any;

  constructor() {// private userService: UserService
    this.newUserForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  submitUser() {
    console.log(this.newUserForm);
    // this.userService.createuser().subscribe(data => {
    // snackbar
    // });
  }
}
