import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
  copyListAwardInterface: AwardInterface [] = [];
  typeOfProjects: [] = [];
  loadingResults = true;
  isawardsempty = false;

  constructor(private awardsService: PrizeService, private typeService: TypeService, public dialog: MatDialog, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getListAward();
    this.getTypeOfProject();
  }

  getListAward() {
    this.awardsService.get().subscribe(data => {
      this.listAwardsInterface = data['hydra:member'];
      this.cdr.detectChanges();
      this.loadingResults = false;
      if (this.listAwardsInterface.length == 0) {
        this.isawardsempty = true;
      } else {
        this.isawardsempty = false;
      }
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
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.getListAward();
      }
    });
  }

  openEditModal(item): void {
    const dialogRef = this.dialog.open(EditAwardModalComponent, {
      data: {
        listAward: item,
        typeProject: this.typeOfProjects
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('modal edit');
      if (result) {
        this.getListAward();
      }
    });
  }

  openDeleteModal(award): void {
    const dialogRef = this.dialog.open(DeleteAwardModalComponent, {
      data: {
        awardToDelete: award,
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.awardsService.delete(award.id).subscribe(() => {
          this.getListAward();
        });
      }
    });
  }


  sortBy(sort: string) {
    if (sort === 'name') {
      console.log('avant', this.listAwardsInterface);
      this.listAwardsInterface.sort(this.sortByAwardName);
      console.log('apres', this.listAwardsInterface);
    }
    if (sort === 'type') {
      this.listAwardsInterface.sort(this.sortByType);
    }
  }

  sortByAwardName(c1: AwardInterface, c2: AwardInterface) {
    if (c1.name.toLocaleLowerCase() > c2.name.toLocaleLowerCase()) {
      return 1;
    } else if (c1.name.toLocaleLowerCase() === c2.name.toLocaleLowerCase()) {
      return 0;
    } else {
      return -1;
    }
  }

  sortByType(c1: AwardInterface, c2: AwardInterface) {
    if (c1.type.title.toLocaleLowerCase() > c2.type.title.toLocaleLowerCase()) {
      return 1;
    } else if (c1.type.title.toLocaleLowerCase() === c2.type.title.toLocaleLowerCase()) {
      return 0;
    } else {
      return -1;
    }
  }
}
