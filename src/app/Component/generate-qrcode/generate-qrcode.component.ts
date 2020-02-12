import { Component, OnInit } from '@angular/core';
import {QrcodeService} from "../../../Service/qrcode.service";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-generate-qrcode',
  templateUrl: './generate-qrcode.component.html',
  styleUrls: ['./generate-qrcode.component.scss']
})
export class GenerateQRCodeComponent implements OnInit {

  constructor(private qrcode: QrcodeService) {
  }

  QRCode: [] = [];

  data : any;
  src: [] = [];
  contentArray : any;
  imageArray: [] = [];

  ngOnInit() {
    this.qrcode.get().subscribe(data => {
      this.QRCode = data['hydra:member'];
    });
  }

  pdf(){
    this.data = document.getElementById("exportthis").getElementsByTagName("img");
    for(let img of this.data){
      this.src.push(img.src);
    }
    for(let src of this.src){
      this.imageArray.push({image:src});
    }
    this.contentArray = {content:this.imageArray};
    pdfMake.createPdf(this.contentArray).download();
  }

}

