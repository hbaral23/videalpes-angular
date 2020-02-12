import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TypeService} from '../../../Service/type.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AddTypeModalComponent} from '../add-type-modal/add-type-modal.component';
import {DeleteItemModalComponent} from '../delete-item-modal/delete-item-modal.component';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  types;
  dataSource = new MatTableDataSource();
  displayedColumns = ['title', 'actions'];

  constructor(private typeService: TypeService, private cdr: ChangeDetectorRef, private dialog: MatDialog) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.typeService.get().subscribe(res => {
      this.types = res['hydra:member'];
      this.dataSource.data = this.types;
      this.cdr.detectChanges();
    });
  }

  deleteType(type) {
    const dialogRef = this.dialog.open(DeleteItemModalComponent, {
      data: {
        element: type.title
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.typeService.delete(type.id).subscribe(() => {
          this.refresh();
        });
      }
    });
  }

  createType() {
    const dialogRef = this.dialog.open(AddTypeModalComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.refresh();
      }
    });
  }
}
