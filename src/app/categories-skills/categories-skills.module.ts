import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CategoriesSkillsRoutingModule } from './categories-skills-routing.module';
import { CategoriesSkillsComponent } from './categories-skills.component';

@NgModule({
  declarations: [CategoriesSkillsComponent],
  imports: [
    CommonModule,
    CategoriesSkillsRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesSkillsModule { }
