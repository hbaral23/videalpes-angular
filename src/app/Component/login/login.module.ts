import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import {ButtonModule, InputTextModule} from 'primeng';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    ButtonModule,
    InputTextModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class LoginModule { }
