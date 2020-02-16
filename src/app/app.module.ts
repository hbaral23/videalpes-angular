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
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {TypesModule} from './Component/types/types.module';
import {DeleteItemModalModule} from './Component/delete-item-modal/delete-item-modal.module';
import {DashboardModule} from './Component/dashboard/dashboard.module';
import {GenerateQRCodeModule} from "./Component/generate-qrcode/generate-qrcode.module";
import { ImgModalComponent } from './img-modal/img-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
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
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TypesModule,
    DeleteItemModalModule,
    DashboardModule,
    GenerateQRCodeModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
