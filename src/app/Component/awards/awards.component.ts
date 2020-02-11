import {Component, OnInit} from '@angular/core';
import {PrizeService} from '../../../Service/prize.service';
import {AwardInterface} from '../../Interface/award-interface';
import {MatDialog} from "@angular/material/dialog";
import {AddAwardModalComponent} from '../add-award-modal/add-award-modal.component';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  listAwardsInterface: AwardInterface [] = [];

  constructor(private awardsService: PrizeService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.awardsService.get().subscribe(data => {
      this.listAwardsInterface = data['hydra:member'];
    });

  }

  openModal(): void {
    const dialogRef = this.dialog.open(AddAwardModalComponent, {
      data: {
        myvar: 'test data'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

    });
  }

  deleteAward(id) {
    console.log(id);
    // this.awardsService.delete(id).subscribe()
  }

  editAward() {
  }
}
