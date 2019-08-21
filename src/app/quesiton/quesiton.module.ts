import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuesitonRoutingModule } from './quesiton-routing.module';
import { QuesitonComponent } from './quesiton.component';

@NgModule({
  declarations: [QuesitonComponent],
  imports: [
    CommonModule,
    QuesitonRoutingModule
  ]
})
export class QuesitonModule { }
