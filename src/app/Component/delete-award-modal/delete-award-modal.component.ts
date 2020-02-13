import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PrizeService} from "../../../Service/prize.service";

@Component({
  selector: 'app-delete-award-modal',
  templateUrl: './delete-award-modal.component.html',
  styleUrls: ['./delete-award-modal.component.scss']
})
export class DeleteAwardModalComponent implements OnInit {

  constructor(private awardsService: PrizeService, public dialogRef: MatDialogRef<DeleteAwardModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  deleteAward(b: boolean) {
    this.dialogRef.close(b);
  }

}
