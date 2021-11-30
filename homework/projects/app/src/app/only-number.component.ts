import {Component, Input} from '@angular/core';

@Component({
  selector: 'appOnlyNumber',
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
         {{title}}
      </div>
   `
})
export class OnlyNumberComponent {
  @Input() title: string;
}
