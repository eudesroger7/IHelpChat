import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardMetricComponent} from './card-metric.component';

@NgModule({
  declarations: [
    CardMetricComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CardMetricComponent
  ]
})
export class CardMetricModule { }
