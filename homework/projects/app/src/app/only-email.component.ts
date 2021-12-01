import {Component, Input} from '@angular/core';

@Component({
  selector: 'appOnlyEmail',
  styles: [
    `.appOnlyEmail {
      font-size: 8pt;
      background-color: aliceblue;
      padding: 5px;
      width: 100px;
    }`
  ],
  template: `
      <div class="appOnlyEmail">
         {{title}}
      </div>
   `
})
export class OnlyEmailComponent {
  @Input() title: string;
}
