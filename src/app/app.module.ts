import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Component/menu/menu.component';
import { ServiceModule } from '../Service/service.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';
import {AwardsModule} from './Component/awards/awards.module';
import {LoginModule} from './Component/login/login.module';
import {ProjectModule} from './Component/project/project.module';
import {ListprojectModule} from './Component/listproject/listproject.module';
import {VoteModule} from './Component/vote/vote.module';
import {UserModule} from './Component/user/user.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceModule,
    ReactiveFormsModule,
    AwardsModule,
    LoginModule,
    ProjectModule,
    ListprojectModule,
    VoteModule,
    UserModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
