import {Component, OnInit} from '@angular/core';
import {QrcodeService} from "../../../Service/qrcode.service";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {FormControl, FormGroup} from "@angular/forms";

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-generate-qrcode',
  templateUrl: './generate-qrcode.component.html',
  styleUrls: ['./generate-qrcode.component.scss']
})
export class GenerateQRCodeComponent implements OnInit {

  constructor(private qrcode: QrcodeService) {
  }

  qrcodeForm = new FormGroup({
    numberQrcode: new FormControl('')
  });

  QRCode: [] = [];
  data: any;
  src: [] = [];
  contentArray: any;
  imageArray: [] = [];

  ngOnInit() {
    this.qrcode.get().subscribe(data => {
      this.QRCode = data['hydra:member'];
    });
  }

  pdf() {
    this.data = document.getElementById("exportthis").getElementsByTagName("img");
    for (let img of this.data) {
      // @ts-ignore
      this.src.push(img.src);
    }
    for (let src of this.src) {
      // @ts-ignore
      this.imageArray.push({image: src});
    }
    this.contentArray = {content: this.imageArray};
    pdfMake.createPdf(this.contentArray).download();
  }

  createQrcode() {
    console.log(this.qrcodeForm.value['numberQrcode']);
    this.qrcode.createByNumber(parseInt(this.qrcodeForm.value['numberQrcode'])).subscribe(res => {
      console.log(res);
    });
    setTimeout(function () {
      location.reload()
    }, 2000);
  }

}

