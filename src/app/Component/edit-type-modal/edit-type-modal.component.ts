import {Component, Inject, OnInit} from '@angular/core';
import {PrizeService} from '../../../Service/prize.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TypeService} from '../../../Service/type.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-type-modal',
  templateUrl: './edit-type-modal.component.html',
  styleUrls: ['./edit-type-modal.component.scss']
})
export class EditTypeModalComponent implements OnInit {

  typeForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditTypeModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private typeService: TypeService) { }

  ngOnInit() {
    this.typeForm = new FormGroup({
      title: new FormControl(this.data.type.id, [Validators.required])
    });
  }

  edit() {
    this.typeService.edit(this.data.type.id, this.typeForm.value).subscribe(res => {
      this.dialogRef.close(res);
    });
  }

}
