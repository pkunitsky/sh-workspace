import { Component, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'loading-button',
  templateUrl: './loading-button.component.html',
  styleUrls: ['./loading-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingButtonComponent extends LoadingComponent {
  constructor() {
    super();
  }

  @Input() type: string;
  @Input() disabled: boolean = false;
  @Input() className: string;
  @Output() activated = new EventEmitter();

  @HostListener('click') handleClick() {
    if (!this.disabled) {
      this.activated.emit();
    }
  }

}
