import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PrizeService} from '../../../Service/prize.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-add-award-modal',
  templateUrl: './add-award-modal.component.html',
  styleUrls: ['./add-award-modal.component.scss']
})
export class AddAwardModalComponent implements OnInit {

  createAwardForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private awardsService: PrizeService, public dialogRef: MatDialogRef<AddAwardModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  save() {
    console.log(this.createAwardForm.value);
    this.awardsService.create(this.createAwardForm.value).subscribe(res => {
      this.dialogRef.close(res);
      // window.location.reload();
    });
    // 
  }

}
