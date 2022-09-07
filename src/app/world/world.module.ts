import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WorldRoutingModule } from "./world-routing.module";
import { HomePageComponent } from './pages/home/home-page.component';
import { HelloPageComponent } from "./pages/hello/hello-page.component";

@NgModule({
  imports: [CommonModule, WorldRoutingModule],
  exports: [],
  declarations: [
    HomePageComponent,
    HelloPageComponent
  ],
})
export class WorldModule{}
