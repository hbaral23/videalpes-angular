import { Component, OnInit } from '@angular/core';
import {QrcodeService} from "../../../Service/qrcode.service";

@Component({
  selector: 'app-generate-qrcode',
  templateUrl: './generate-qrcode.component.html',
  styleUrls: ['./generate-qrcode.component.scss']
})
export class GenerateQRCodeComponent implements OnInit {

  constructor(private qrcode: QrcodeService) {
  }

  QRCode: [] = [];

  ngOnInit() {
    this.qrcode.get().subscribe(data => {
      console.log(data['hydra:member']);
      this.QRCode = data['hydra:member'];
    });
  }

}

