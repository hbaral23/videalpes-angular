import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule
  ]
})
export class DashboardModule {
}
