import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './user.component';
import {ButtonModule, CheckboxModule, InputTextModule, RadioButtonModule} from 'primeng';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    CheckboxModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
