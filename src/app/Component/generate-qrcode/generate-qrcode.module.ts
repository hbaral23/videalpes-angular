import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQRCodeComponent } from "./generate-qrcode.component";
import {QRCodeModule} from "angularx-qrcode";


@NgModule({
  declarations: [GenerateQRCodeComponent],
  imports: [
    CommonModule,
    QRCodeModule
  ]
})
export class GenerateQRCodeModule { }
