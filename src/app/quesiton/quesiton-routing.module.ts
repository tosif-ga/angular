import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuesitonComponent } from './quesiton.component';

const routes: Routes = [
  {
    path: '',
    component: QuesitonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuesitonRoutingModule {}
