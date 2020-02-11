import {Component, OnInit} from '@angular/core';
import {PrizeService} from '../../../Service/prize.service';
import {AwardInterface} from '../../Interface/award-interface';
import {MatDialog} from '@angular/material/dialog';
import {AddAwardModalComponent} from '../add-award-modal/add-award-modal.component';
import {EditAwardModalComponent} from '../edit-award-modal/edit-award-modal.component';
import {TypeService} from '../../../Service/type.service';
import {Router} from '@angular/router';
import {DeleteAwardModalComponent} from "../delete-award-modal/delete-award-modal.component";

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  listAwardsInterface: AwardInterface [] = [];
  typeOfProjects: [] = [];
  loadingResults = false;

  constructor(private awardsService: PrizeService, private typeService: TypeService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getListAward();
    this.getTypeOfProject();

  }

  getListAward() {
    this.loadingResults = true;
    this.awardsService.get().subscribe(data => {
      this.listAwardsInterface = data['hydra:member'];
      console.log('on init', this.listAwardsInterface);
      this.loadingResults = false;
    });
  }

  getTypeOfProject() {
    this.typeService.get().subscribe(data => {
      this.typeOfProjects = data['hydra:member'];
    });
  }

  openAddModal(): void {
    const dialogRef = this.dialog.open(AddAwardModalComponent, {
      data: {
        typeProject: this.typeOfProjects
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('afterclose modal', result);

    });
  }

  openEditModal(item): void {
    console.log('editmodal', item);
    const dialogRef = this.dialog.open(EditAwardModalComponent, {
      data: {
        listAward: item,
        typeProject: this.typeOfProjects
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('modal edit', result);
    });
  }


  openDeleteModal(award): void {
    const dialogRef = this.dialog.open(DeleteAwardModalComponent, {
      data: {
        awardToDelete: award,

      }
    });
    console.log('item', award)

    dialogRef.afterClosed().subscribe(result => {
      console.log('modal suppr', result);
    });
  }


}
