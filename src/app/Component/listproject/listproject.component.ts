import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProjetService} from "../../../Service/projet.service";
import {TypeService} from "../../../Service/type.service";
import {MatDialog} from "@angular/material/dialog";
import {AddProjectModalComponent} from "../add-project-modal/add-project-modal.component";
import {EditProjectModalComponent} from "../edit-project-modal/edit-project-modal.component";
import {DeleteItemModalComponent} from "../delete-item-modal/delete-item-modal.component";

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.scss']
})
export class ListprojectComponent implements OnInit {

  type: [] = [];
  project : [] = [];

  constructor(private formBuilder: FormBuilder, private projectService: ProjetService, private typeService: TypeService,private dialog: MatDialog) { }

  ngOnInit() {
    this.typeService.get().subscribe(data => {
        this.type = data['hydra:member'];
    });
    this.projectService.get().subscribe(data => {
      console.log(data['hydra:member']);
      this.project = data['hydra:member'];
    })
  }

  openModal(): void {
    const dialogRef = this.dialog.open(AddProjectModalComponent, {});
  }

  delete(info){
    console.log(info.title);
    const dialogRef = this.dialog.open(DeleteItemModalComponent,{
      data:{
        element: info.title
      }});
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.projectService.delete(info.id).subscribe(() => {
          location.reload();
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
  }

}
