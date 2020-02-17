import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectModule, MatOptionModule } from '@angular/material';
import { PrizeService } from 'src/Service/prize.service';
import { VoteService } from 'src/Service/vote.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  winnerStr:string = undefined;
  selectedprize: any;
  isloadingdata = false;
  dataError = false;
  prizes: any[] = [];  
  data: any;
  films = [];
  filmsvotes: number[] = [];
  colors: string[] = [];
  darkcolors: string[] = [];
  options = {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      position: 'top'
  }
  };

  @Output()
  ngInit: EventEmitter<any> = new EventEmitter();

  constructor(private prizeservice: PrizeService, private voteservice: VoteService, private formbuilder: FormBuilder) {
  }

  ngOnInit() {
      this.ngInit.emit();
    this.prizeservice.get().subscribe(data => {
      this.prizes = data['hydra:member'];
    })
  }

getPrizeVote() {
  this.isloadingdata = true;
  this.dataError = false;
  this.loadChartData(this.selectedprize.id);
}

loadChartData(prizeId) {
  this.voteservice.getByPrize(prizeId).subscribe(data => {
  this.films = [];
  this.filmsvotes = [];
  this.colors = [];
  this.darkcolors = [];

  data['hydra:member'].forEach(element => {
    this.films.push(element[0] + ' : ' + element[1]+ ' votes ');
    this.filmsvotes.push(element[1]);


    for (let i = 0 ; i < this.films.length; i++) {      
      this.colors[i] = this.getRdmColor();
      this.darkcolors[i] = this.colors[i].substring(0,this.colors[i].length-1)+", 0.9)";
    }
    this.data = {};
    
    this.data = {
      labels: this.films,
      Dataset:[{}],
      datasets: [
          {
              data: this.filmsvotes,
              backgroundColor: this.colors,
              hoverBackgroundColor: this.darkcolors
          }]    
      }
    });
    this.winnerStr = this.getWinner();
  });
  this.isloadingdata = false;
  }
  
  getRdmColor () {
    return "rgba(" + this.getRandomInt() + ", " + this.getRandomInt() + ", " + this.getRandomInt() + ")";
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(256));
  }

  awardselectedchanged() {
    this.dataError = false;
    this.getPrizeVote();
  }

  getWinner() {
    let max = Math.max.apply(null, this.filmsvotes);
let winner = []
if (max != 0) { 
  for (let i = 0; i < this.filmsvotes.length; i++) {
    if (this.filmsvotes[i] == max)
winner.push(i);
  }
if (winner.length == 1) {
  return this.films[winner[0]];
}
else if (winner.length > 0)
{
  let winners = "";
  for (let i = 0; i < winner.length; i++) {
  if (i != winner.length-1 ) {
    winners += this.films[winner[i]] + " | ";
  } else {
    winners += this.films[winner[i]];
  }
  }
    
  console.log(winners)
  return winners;
} else {
  return "";
}
}
   }
}
