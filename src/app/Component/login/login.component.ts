import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ButtonModule } from 'primeng/primeng';
import { AuthServiceService } from 'src/Service/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public profileForm: FormGroup;
  hide = true;

  constructor(private authService: AuthServiceService) {
    this.profileForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.authService.login({ login: this.profileForm.value.login, password: this.profileForm.value.password}).subscribe(
        answer =>
          console.log(answer)
        );
    }
  }

  clicktest(e) {
    console.log('hide txt');
  }
}
