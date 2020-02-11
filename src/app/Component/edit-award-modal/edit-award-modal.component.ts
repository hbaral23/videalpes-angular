import {Component, Inject, OnInit} from '@angular/core';
import {PrizeService} from "../../../Service/prize.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AwardInterface} from "../../Interface/award-interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-award-modal',
  templateUrl: './edit-award-modal.component.html',
  styleUrls: ['./edit-award-modal.component.scss']
})
export class EditAwardModalComponent implements OnInit {

  editAwardForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl('')
  });

  constructor(private awardsService: PrizeService, public dialogRef: MatDialogRef<EditAwardModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  editDataAward(id) {
    this.dialogRef.close('données modifiées');
    console.log('idddd', this.editAwardForm.value);
    this.awardsService.edit(id, this.editAwardForm.value).subscribe(res => {
        console.log('data modifiées', res);

      }
    );
  }

}


