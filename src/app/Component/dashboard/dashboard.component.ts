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

  constructor(private launchService: LaunchService) {
  }

  ngOnInit() {
    this.launchService.get().subscribe(data => {
      this.launchVote = data;
    });
  }

  launching() {
    console.log('before', this.launchVote);
    this.launchVote.authorization = true;
    console.log('after', this.launchVote);


  }

  stopLaunching() {
    console.log('stopbefore', this.launchVote);
    this.launchVote.authorization = false;
    console.log('stopafter', this.launchVote);
  }

  showResults() {
    this.showVotes = !this.showVotes;
    console.log('resultats des votes');
  }
}
