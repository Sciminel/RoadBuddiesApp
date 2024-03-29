import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './_helpers/auth.guard';

const routes: Routes = [

  { 
    path: '', 
    loadChildren: () => import('./public/public.module')
      .then(m => m.PublicModule)  
  },

  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)  
  },

  {
    path: 'user', 
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule),
    canActivate:[authGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
