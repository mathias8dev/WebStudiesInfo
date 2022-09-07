import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./world/world.module').then(m=>m.WorldModule)
  },
  {
    path: 'admin',
    loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
