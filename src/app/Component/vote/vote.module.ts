import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VoteComponent} from './vote.component';
import {ChartModule} from 'primeng';



@NgModule({
  declarations: [VoteComponent],
  imports: [
    CommonModule,
    ChartModule
  ]
})
export class VoteModule { }
