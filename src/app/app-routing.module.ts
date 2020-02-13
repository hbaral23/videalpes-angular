import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectComponent} from './Component/project/project.component';
import {AwardsComponent} from './Component/awards/awards.component';
import {LoginComponent} from './Component/login/login.component';
import {ListprojectComponent} from './Component/listproject/listproject.component';
import {VoteComponent} from './Component/vote/vote.component';
import {AuthGuard} from './guard/auth.guard';
import {MenuComponent} from './Component/menu/menu.component';
import {AppComponent} from './app.component';
import {UserComponent} from './Component/user/user.component';
import {TypesComponent} from './Component/types/types.component';
import {DashboardComponent} from './Component/dashboard/dashboard.component';
import {GenerateQRCodeComponent} from "./Component/generate-qrcode/generate-qrcode.component";

const routes: Routes = [
  {path: 'generateqrcode', component: GenerateQRCodeComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'types', component: TypesComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'award', component: AwardsComponent, canActivate: [AuthGuard]},
  {path: 'listproject', component: ListprojectComponent, canActivate: [AuthGuard]},
  {path: 'app', component: AppComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
