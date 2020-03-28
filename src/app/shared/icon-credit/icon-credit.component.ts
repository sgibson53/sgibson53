import {Component, Input} from '@angular/core';

@Component({
  selector: 'sg-icon-credit',
  templateUrl: './icon-credit.component.html',
  styleUrls: ['./icon-credit.component.scss']
})
export class IconCreditComponent {
  @Input() public text: string;
}
