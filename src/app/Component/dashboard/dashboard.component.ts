import {Component, OnInit} from '@angular/core';
import {LaunchService} from '../../../Service/launch.service';
import { MatDialog } from '@angular/material';
import { DeleteItemModalComponent } from '../delete-item-modal/delete-item-modal.component';
import { VoteService } from 'src/Service/vote.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  launchVote;
  showVotes = false;

  constructor(private launchService: LaunchService, private dialog: MatDialog, private voteservice: VoteService) {   
    this.launchService.get().subscribe(data => {
      this.launchVote = data;
    });
  }

  ngOnInit() {
  }

  launching() {
    this.launchService.edit(1, {authorization: true}).subscribe(data => {
      this.launchVote = data;
    });
    document.getElementById("resultBtn").style.backgroundColor = "white";
  }

  stopLaunching() {
    this.launchService.edit(1, {authorization: false}).subscribe(data => {
      this.launchVote = data;
    });
}

  showResults() {
    this.showVotes = !this.showVotes;
  }

  deleteAllVotes() {
    const dialogRef = this.dialog.open(DeleteItemModalComponent,{
      data: {
        element: 'votes'
      }});
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.voteservice.deleteAll().subscribe(() => {
          location.reload();
        });
      }
    });
  }
}
