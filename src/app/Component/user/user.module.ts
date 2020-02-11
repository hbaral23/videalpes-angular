import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './user.component';
import {ButtonModule, CheckboxModule, InputTextModule, RadioButtonModule} from 'primeng';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    CheckboxModule
  ]
})
export class UserModule { }
