import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQRCodeComponent } from "./generate-qrcode.component";
import {QRCodeModule} from "angularx-qrcode";
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [GenerateQRCodeComponent],
  imports: [
    CommonModule,
    QRCodeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class GenerateQRCodeModule { }
