import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ButtonModule } from 'primeng/primeng';
import { AuthServiceService } from 'src/Service/auth-service.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public profileForm: FormGroup;
  hide = true;

  constructor(private authService: AuthServiceService, private router: Router) {
    this.profileForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    if (this.authService.getToken()) {
      this.router.navigate(['/project']);
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.authService.login({ _username: this.profileForm.value.login, _password: this.profileForm.value.password}).subscribe(
        answer =>
          console.log(answer)
        );
    }
  }

  clicktest(e) {
    console.log('hide txt');
  }
}
