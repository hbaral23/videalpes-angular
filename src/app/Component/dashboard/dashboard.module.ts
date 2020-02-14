import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { VoteComponent } from '../vote/vote.component';
import { VoteModule } from '../vote/vote.module';
import { MatSelectModule, MatOptionModule, MatProgressSpinnerModule } from '@angular/material';
import { ChartModule } from 'primeng';


@NgModule({
  declarations: [DashboardComponent, VoteComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    VoteModule,
    MatSelectModule,
    MatOptionModule,
    ChartModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule {
}
