import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { GooglemapRoutingModule } from './googlemap-routing.module';
import { GooglemapComponent } from './googlemap.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GooglemapComponent],
  imports: [
    CommonModule,
    GooglemapRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtVFgESeKeiB8Jqb14umBEKm1aSXdfssc',
      libraries: ['places']
    })
  ]
})
export class GooglemapModule { }
