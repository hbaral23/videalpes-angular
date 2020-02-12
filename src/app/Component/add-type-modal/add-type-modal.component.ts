import {Component, Inject, OnInit} from '@angular/core';
import {TypeService} from '../../../Service/type.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-type-modal',
  templateUrl: './add-type-modal.component.html',
  styleUrls: ['./add-type-modal.component.scss']
})
export class AddTypeModalComponent implements OnInit {

  typeForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddTypeModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private typeService: TypeService) { }

  ngOnInit() {
    this.typeForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    });
  }

  save() {

    this.typeForm.updateValueAndValidity();

    if (this.typeForm.invalid) {
      this.typeForm.markAllAsTouched();
    }

    this.typeService.create(this.typeForm.value).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
}
