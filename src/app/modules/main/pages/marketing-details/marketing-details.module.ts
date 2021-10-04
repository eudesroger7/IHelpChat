import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MarketingDetailsComponent} from './marketing-details.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CardMetricModule} from "../../../../components/metric-card/card-metric.module";
import {GetMarketingContactStatusTitleModule} from "../../../../pipes/get-marketing-contact-status-title.pipe";

const routes: Routes = [
  {
    path: '',
    component: MarketingDetailsComponent
  },
];

@NgModule({
  declarations: [
    MarketingDetailsComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        CardMetricModule,
        GetMarketingContactStatusTitleModule,
    ]
})
export class MarketingDetailsModule { }
