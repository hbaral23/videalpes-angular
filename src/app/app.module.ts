import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialDesignModule } from './material-design/material-design.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './Component/user/user.component';
import { LoginComponent } from './Component/login/login.component';
import { MenuComponent } from './Component/menu/menu.component';
import { ProjectComponent } from './Component/project/project.component';
import { ServiceModule } from '../Service/service.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AwardsComponent } from './Component/awards/awards.component';
import { VoteComponent } from './Component/vote/vote.component';
import { ListprojectComponent } from './Component/listproject/listproject.component';
import { AuthGuard } from './guard/auth.guard';
import {AwardsModule} from './Component/awards/awards.module';
import {LoginModule} from './Component/login/login.module';
import {ProjectModule} from './Component/project/project.module';
import {ListprojectModule} from './Component/listproject/listproject.module';
import {VoteModule} from './Component/vote/vote.module';
import {UserModule} from './Component/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    PrimeNgModule,
    BrowserAnimationsModule,
    ServiceModule,
    ReactiveFormsModule,
    AwardsModule,
    LoginModule,
    ProjectModule,
    ListprojectModule,
    VoteModule,
    UserModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
