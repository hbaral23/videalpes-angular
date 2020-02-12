import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/Service/auth-service.service';
import { Router} from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public profileForm: FormGroup;
  hide = true;

  constructor(private authService: AuthServiceService, private router: Router, private snackBar: MatSnackBar) {
    this.profileForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    if (this.authService.getToken()) {
      this.router.navigate(['/listproject']);
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.authService.login({ _username: this.profileForm.value.login, _password: this.profileForm.value.password}).subscribe({
      
      error: (err) => {
        this.snackBar.open('Identifiant ou mot de passe incorrecte' , null , {
          duration: 3000
        });
      }
    }
        );
    }
  }

  clicktest(e) {
    console.log('hide txt');
  }
}
