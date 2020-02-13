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
    this.editAwardForm = new FormGroup({
      name: new FormControl(this.data.listAward.name),
      type: new FormControl(this.data.typeProject.id)
    });
  }

  editDataAward(id) {
    this.awardsService.edit(id, this.editAwardForm.value).subscribe(res => {
        this.dialogRef.close(res);
      }
    );
  }

}


