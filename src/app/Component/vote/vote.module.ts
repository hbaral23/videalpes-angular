import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

import {VoteComponent} from './vote.component';



@NgModule({
  declarations: [VoteComponent],
  imports: [
    CommonModule
  ]
})
export class VoteModule { }
