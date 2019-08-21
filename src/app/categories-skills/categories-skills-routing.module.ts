import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesSkillsComponent } from './categories-skills.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesSkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesSkillsRoutingModule {}
