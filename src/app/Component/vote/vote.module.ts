import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent} from './vote.component';
import { ChartModule } from 'primeng';
import { MatSelectModule, MatOptionModule } from '@angular/material';



@NgModule({
  declarations: [VoteComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    ChartModule,
  ]
})
export class VoteModule { }
