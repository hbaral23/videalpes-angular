import {Component, OnInit} from '@angular/core';
import {PrizeService} from '../../../Service/prize.service';
import {AwardInterface} from '../../Interface/award-interface';
import {MatDialog} from "@angular/material/dialog";
import {AddAwardModalComponent} from '../add-award-modal/add-award-modal.component';
import {EditAwardModalComponent} from "../edit-award-modal/edit-award-modal.component";

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  listAwardsInterface: AwardInterface [] = [];
  loadingResults = false;

  constructor(private awardsService: PrizeService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadingResults = true;
    this.awardsService.get().subscribe(data => {
      this.listAwardsInterface = data['hydra:member'];
      console.log('on init', this.listAwardsInterface);
      this.loadingResults = false;
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
      console.log('afterclose modal', result);

    });
  }

  openEditModal(id): void {
    console.log('edti', id);
    const dialogRef = this.dialog.open(EditAwardModalComponent, {
      data: {
        mydata: this.listAwardsInterface[id]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('modal edit', result);
    });
  }

  deleteAward(id) {
    console.log(id);
    // this.awardsService.delete(id).subscribe()
  }

}
