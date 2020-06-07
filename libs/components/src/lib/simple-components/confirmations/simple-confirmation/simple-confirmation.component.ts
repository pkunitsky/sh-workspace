import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { appearDisappear, ConfirmationPopoverWindowOptions } from '../confirmations.utils';

@Component({
  selector: 'simple-confirmation',
  templateUrl: './simple-confirmation.component.html',
  styleUrls: ['./simple-confirmation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    appearDisappear
  ]
})
export class SimpleConfirmationComponent implements OnInit {
  @Input() options: ConfirmationPopoverWindowOptions;

  constructor() {
  }

  show = true;
  answer: boolean = null;
  isInitialized = false;

  ngOnInit() {
  }

  decline() {
    this.answer = false;
    this.show = false;
  }

  accept() {
    this.answer = true;
    this.show = false;
  }

  handleAnimationEnd() {
    if (this.answer === true) {
      this.options.onConfirm(null);
    }
    if (this.answer === false) {
      this.options.onCancel(null);
    }
    this.isInitialized = true;
  }

  @HostListener('document:click', ['$event']) handleDocumentClick(event) {
    event.stopPropagation();
    event.preventDefault();

    if (this.isInitialized) {
      this.show = false;
    }
  }

  @HostListener('click', ['$event']) handleClick(event) {
    event.stopPropagation();
    if (this.answer === null) {
      this.show = true;
    }
  }
}
