import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { AllActorsComponent } from './componentsActors/all-actors/all-actors.component';
import { ActorComponent } from './componentsActors/actor/actor.component';


@NgModule({
  declarations: [
    AllActorsComponent,
    ActorComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule
  ]
})
export class ActorsModule { }
