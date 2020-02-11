import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from "./Component/project/project.component";
import { AwardsComponent } from './Component/awards/awards.component';
import { LoginComponent } from './Component/login/login.component';
import { ListprojectComponent } from './Component/listproject/listproject.component';
import { VoteComponent } from './Component/vote/vote.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'project', component: ProjectComponent, canActivate: [AuthGuard]},
  {path: 'award', component: AwardsComponent, canActivate: [AuthGuard]},
  {path: 'project', component: ProjectComponent, canActivate: [AuthGuard]},
  {path: 'vote', component: VoteComponent, canActivate: [AuthGuard]},
  {path: 'listproject', component: ListprojectComponent, canActivate: [AuthGuard]},
  {path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
