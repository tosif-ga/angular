import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SelectOptionComponent } from './select-option/select-option.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    SelectOptionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgSelectModule
  ],
  exports: [HeaderComponent, SideNavComponent, SelectOptionComponent, CommonModule]
})
export class SharedModule { }
