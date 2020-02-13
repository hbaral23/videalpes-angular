import {Component, OnInit} from '@angular/core';
import {LaunchService} from '../../../Service/launch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  launchVote;
  showVotes = false;
  isVoteEnd = true;// false

  constructor(private launchService: LaunchService) {
  }

  ngOnInit() {
    this.launchService.get().subscribe(data => {
      this.launchVote = data;
    });
  }

  launching() {
    this.launchService.edit(1, {authorization: true}).subscribe(data => {
      this.launchVote = data;
    });
  }

  stopLaunching() {
    this.launchService.edit(1, {authorization: false}).subscribe(data => {
      this.launchVote = data;
    });
  }

  showResults() {
    this.showVotes = !this.showVotes;
  }
}
