import { Component, OnInit } from '@angular/core';
import { MatSelectModule, MatOptionModule } from '@angular/material';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  isloadingdata = false;
  dataError = false;
  awards: string[] = ['Prix 1','Prix 2', 'Prix 3'];
  data: any;
  films = ['FILM 1','FILM 2','FILM 3'];
  filmsvotes =  [25, 150, 100];
  colors: string[] = [];
  darkcolors: string[] = [];
  options = {
    responsive: false,
    maintainAspectRatio: false
  };

  constructor() {//private voteService: VoterService
    this.getPrizeVote();
  }

  ngOnInit() {
  }

getPrizeVote() {
this.isloadingdata = true;
this.dataError = false;
// this.voteService.getVoteByPrize().suscribe{
// this.LoadChartData();
// this.isloadingdata = false;
this.LoadChartData();
// error =>
// this.dataError = true;
// }
}

LoadChartData(){
  this.colors = [];
  this.darkcolors = [];
  for (let i = 0 ; i < this.films.length; i++) {
    this.colors[i] = this.getRdmColor();
    this.darkcolors[i] = this.colors[i].substring(0,this.colors[i].length-1)+", 0.9)";
  }
  this.data = {
    labels: this.films,
    datasets: [
        {
            data: this.filmsvotes,
            backgroundColor: this.colors,
            hoverBackgroundColor: this.darkcolors
        }]
    };
    this.isloadingdata = false;
}

  getRdmColor () {
    return "rgba(" + this.getRandomInt() + ", " + this.getRandomInt() + ", " + this.getRandomInt() + ")";
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(256));
  }

  awardselectedchanged() {
    this.getPrizeVote();
  }
}
