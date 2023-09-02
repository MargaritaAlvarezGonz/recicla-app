import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorMessageComponent],
  exports: [ErrorMessageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ErrorMessageModule { }
