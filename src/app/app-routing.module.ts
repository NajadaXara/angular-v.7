import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import {UsersComponent} from './components/users';
import {LeavesComponent} from './components/leaves';
import { AuthGuardService } from './services';

const routes: Routes = [
  { path: '', component: HomeComponent }, //, canActivate: [AuthGuardService]
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'leaves', component: LeavesComponent }, //, canActivate: [AuthGuardService]

  // home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
