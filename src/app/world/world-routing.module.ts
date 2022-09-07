import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloPageComponent } from './pages/hello/hello-page.component';
import { HomePageComponent } from './pages/home/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'hello', component: HelloPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldRoutingModule { }
