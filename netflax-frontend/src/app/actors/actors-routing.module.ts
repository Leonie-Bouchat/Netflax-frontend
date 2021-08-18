import { ActorComponent } from './componentsActors/actor/actor.component';
import { AllActorsComponent } from './componentsActors/all-actors/all-actors.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: AllActorsComponent},
  {path: ':id', component: ActorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
