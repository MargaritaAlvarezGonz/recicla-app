import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from './pickup-call-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PickupCallCardComponent],
  exports:[PickupCallCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PickupCallCardModule { }
