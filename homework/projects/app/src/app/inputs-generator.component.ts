import {Component, Input} from '@angular/core';

@Component({
  selector: 'appInputsGenerator',
  styles: [
    `.appOnlyNumber {
      font-size: 8pt;
      background-color: aliceblue;
      padding: 5px;
      width: 100px;
    }`
  ],
  template: `
      <div class="appOnlyNumber">
         {{appOnlyNumberText}}
      </div>
   `
})
export class InputsGeneratorComponent {
  @Input() appOnlyNumberText: string;
}
