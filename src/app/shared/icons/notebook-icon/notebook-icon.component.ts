import { Component, Input } from '@angular/core';

@Component({
  selector: 'sg-notebook-icon',
  templateUrl: './notebook-icon.component.html',
  styleUrls: ['./notebook-icon.component.scss']
})
export class NotebookIconComponent {
  @Input() color: string;
  @Input() width: number;
}
