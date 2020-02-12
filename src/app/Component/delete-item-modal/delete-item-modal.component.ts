import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-item-modal',
  templateUrl: './delete-item-modal.component.html',
  styleUrls: ['./delete-item-modal.component.scss']
})
export class DeleteItemModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteItemModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

  confirm(b: boolean) {
    this.dialogRef.close(b);
  }
}
