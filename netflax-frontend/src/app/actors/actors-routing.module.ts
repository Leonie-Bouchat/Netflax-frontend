import { AllActorsComponent } from './componentsActors/all-actors/all-actors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'all-actors', pathMatch:'full'},
  {path: 'all-actors', component: AllActorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
