import { SanitizeUrlPipe } from './../pipes/sanitize-url.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SanitizeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SanitizeUrlPipe
  ]
})
export class SharedModule { }
