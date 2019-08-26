import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CategoriesSkillsRoutingModule } from './categories-skills-routing.module';
import { CategoriesSkillsComponent } from './categories-skills.component';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [CategoriesSkillsComponent],
  imports: [
  CommonModule,
    CategoriesSkillsRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    SharedModule,
    NgSelectModule
  ]
})
export class CategoriesSkillsModule { }
