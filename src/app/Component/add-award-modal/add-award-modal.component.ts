import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PrizeService} from '../../../Service/prize.service';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeService} from '../../../Service/type.service';
import {AwardInterface} from '../../Interface/award-interface';


@Component({
  selector: 'app-add-award-modal',
  templateUrl: './add-award-modal.component.html',
  styleUrls: ['./add-award-modal.component.scss']
})
export class AddAwardModalComponent implements OnInit {

  typeOfProjects: [] = [];
  listAwardsInterface: AwardInterface [] = [];
  createAwardForm = new FormGroup({
    name: new FormControl(''),
    // type: new FormControl('')
  });

  constructor(private awardsService: PrizeService, private typeService: TypeService, public dialogRef: MatDialogRef<AddAwardModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.typeService.get().subscribe(data => {
      this.typeOfProjects = data['hydra:member'];
    });
  }

  save() {
    console.log(this.createAwardForm.value);
    this.dialogRef.close('données enregistrées');
    this.awardsService.create(this.createAwardForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
