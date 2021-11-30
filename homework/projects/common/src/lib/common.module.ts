import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    CommonComponent,
    InputComponent
  ],
  imports: [
  ],
  exports: [
    CommonComponent,
    InputComponent
  ]
})
export class CommonModule { }
