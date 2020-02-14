import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProjetService} from "../../../Service/projet.service";
import {TypeService} from "../../../Service/type.service";
import {MatDialog} from "@angular/material/dialog";
import {AddProjectModalComponent} from "../add-project-modal/add-project-modal.component";
import {EditProjectModalComponent} from "../edit-project-modal/edit-project-modal.component";
import {DeleteItemModalComponent} from "../delete-item-modal/delete-item-modal.component";
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.scss']
})
export class ListprojectComponent implements OnInit {

  type: [] = [];
  project: [] = [];
  loadingResults = true;

  dataSource = new MatTableDataSource();
  displayedColumns = ['title', 'description', 'persons', 'type', 'actions'];

  constructor(private formBuilder: FormBuilder, private projectService: ProjetService, private typeService: TypeService, private dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.typeService.get().subscribe(data => {
        this.type = data['hydra:member'];
    });
    this.refresh();
  }

  refresh() {
    this.projectService.get().subscribe(data => {
      this.project = data['hydra:member'];
      this.dataSource.data = this.project;
      this.cdr.detectChanges();
      this.loadingResults = false;
    });
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AddProjectModalComponent, {
      data: {
        type: this.type
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.refresh();
      }
    });
  }

  delete(info) {
    console.log(info.title);
    const dialogRef = this.dialog.open(DeleteItemModalComponent,{
      data: {
        element: info.title
      }});
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.projectService.delete(info.id).subscribe(() => {
          this.refresh();
        });
      }
    });
  }

  openEditProjectModal(info){
    const dialogRef = this.dialog.open(EditProjectModalComponent,{
      data:{
        projet: info,
        type: this.type
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.projectService.edit(info.id, res).subscribe(res => {
          this.refresh();
        });
      }
    });
  }

}
