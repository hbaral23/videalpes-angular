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
  {path: 'generateQRCode', component: GenerateQRCodeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'types', component: TypesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'award', component: AwardsComponent},
  {path: 'vote', component: VoteComponent},
  {path: 'listproject', component: ListprojectComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'app', component: AppComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
