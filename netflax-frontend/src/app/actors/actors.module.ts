import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { AllActorsComponent } from './componentsActors/all-actors/all-actors.component';


@NgModule({
  declarations: [
    AllActorsComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule
  ]
})
export class ActorsModule { }
