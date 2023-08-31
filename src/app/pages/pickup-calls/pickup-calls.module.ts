import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallsPageRoutingModule } from './pickup-calls-routing.module';

import { PickupCallsPage } from './pickup-calls.page';
import { PickupCallCardModule } from '../../components/pickup-call-card/pickup-call-card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallsPageRoutingModule,
    PickupCallCardModule
  ],
  declarations: [PickupCallsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PickupCallsPageModule {}
