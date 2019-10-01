import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path: '' , loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
  {path: 'users' , loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule), canActivate: [AuthGuardService]},
  {path: 'login' , loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
  {path: 'register' , loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
