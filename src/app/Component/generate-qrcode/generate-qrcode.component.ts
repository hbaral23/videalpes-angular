import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {QrcodeService} from "../../../Service/qrcode.service";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {FormControl, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-generate-qrcode',
  templateUrl: './generate-qrcode.component.html',
  styleUrls: ['./generate-qrcode.component.scss']
})
export class GenerateQRCodeComponent implements OnInit {

  constructor(private qrcode: QrcodeService, private cdr: ChangeDetectorRef, private router: Router) {
  }

  qrcodeForm = new FormGroup({
    numberQrcode: new FormControl('')
  });

  QRCode: [] = [];
  data: any;
  src = [];
  contentArray: any;
  imageArray = [];

  ngOnInit() {
    this.init();
  }

  init() {
    this.qrcode.get().subscribe(data => {
      this.QRCode = data['hydra:member'];
      this.cdr.detectChanges();
    });
  }

  pdf() {
    this.data = document.getElementById('exportthis').getElementsByTagName("img");
    for (const img of this.data) {

      this.src.push(img.src);
    }
    for (const src of this.src) {

      this.imageArray.push({image: src});
    }
    this.contentArray = {content: this.imageArray};
    pdfMake.createPdf(this.contentArray).download();
  }

  createQrcode() {
    console.log(this.qrcodeForm.value.numberQrcode);
    this.qrcode.createByNumber(parseInt(this.qrcodeForm.value.numberQrcode)).subscribe((res) => {
      this.reloadComponent();
    },
    (err) => {
      this.reloadComponent();
    });
  }

  reloadComponent() {
this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
  this.router.navigate(['/generateqrcode']);
});
  }
  deleteALl(){
    this.qrcode.deleteAll().subscribe((res) => {
      this.reloadComponent();
    },
    (err) => {
      this.reloadComponent();
    });
  }

}

