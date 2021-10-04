import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from './main.routing';
import {MainComponent} from './main.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCommonModule} from '@angular/material/core';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCommonModule,
  ],
})
export class MainModule { }
