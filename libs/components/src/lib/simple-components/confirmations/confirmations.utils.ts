import { animate, style, transition, trigger } from '@angular/animations';
import { TemplateRef } from '@angular/core';
import { ConfirmCancelEvent } from 'angular-confirmation-popover/lib/confirmation-popover.directive';
import { ConfirmationPopoverOptions } from 'angular-confirmation-popover/lib/confirmation-popover-options.provider';

export interface ConfirmationPopoverWindowOptions extends ConfirmationPopoverOptions {
  onConfirm: (event: ConfirmCancelEvent) => void;
  onCancel: (event: ConfirmCancelEvent) => void;
  onAfterViewInit: () => void;
  customTemplate: TemplateRef<any>;
}

export const appearDisappear = trigger('appearDisappear', [
  transition(':enter', [
    style({transform: 'scale(0.75)', opacity: 0}),
    animate(150, style({transform: 'scale(1)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'scale(1)', opacity: 1}),
    animate(100, style({transform: 'scale(0.75)', opacity: 0}))
  ])
]);
