import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { AbstractControl } from '@angular/forms';

export function isFormControlInvalid(formControl: AbstractControl): boolean {
  if (formControl) {
    return Boolean(formControl.dirty && formControl.errors);
  } else {
    return false;
  }
}

export function isFormControlError(formControl: AbstractControl, errorField: string): boolean {
  if (formControl) {
    return Boolean(formControl.dirty && formControl.errors && formControl.errors.required);
  } else {
    return false;
  }
}

export function isFormControlRequired(abstractControl: AbstractControl): boolean {
  if (abstractControl) {
    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    if (abstractControl['controls']) {
      for (const controlName in abstractControl['controls']) {
        if (abstractControl['controls'][controlName]) {
          if (isFormControlRequired(abstractControl['controls'][controlName])) {
            return true;
          }
        }
      }
    }
  }

  return false;
}

export const appearDisappearFormGroupField = trigger('appearDisappearFormGroupField', [
  transition(':enter', [
    style({transform: 'scale(0.75)', opacity: 0}),
    animate(150, style({transform: 'scale(1)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'scale(1)', opacity: 1}),
    animate(100, style({transform: 'scale(0.75)', opacity: 0}))
  ])
]);

export const appearDisappearFormGroupError = trigger('appearDisappearFormGroupError', [
  transition(':enter', [
    style({transform: 'scale(0.75)', opacity: 0}),
    animate(150, style({transform: 'scale(1)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'scale(1)', opacity: 1}),
    animate(100, style({transform: 'scale(0.75)', opacity: 0}))
  ])
]);

export const appearDisappearFormSelectMenu = trigger('appearDisappearFormSelectMenu', [
  transition(':enter', [
    style({transform: 'translateY(calc(100% + 12px))', opacity: 0}),
    animate(90, style({transform: 'translateY(100%)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'translateY(100%)', opacity: 1}),
    animate(90, style({transform: 'translateY(100%)', opacity: 0}))
  ])
]);

export enum InputType {
  button = 'button',
  checkbox = 'checkbox',
  color = 'color',
  date = 'date',
  datetimeLocal = 'datetime-local',
  email = 'email',
  file = 'file',
  hidden = 'hidden',
  image = 'image',
  month = 'month',
  number = 'number',
  password = 'password',
  radio = 'radio',
  range = 'range',
  reset = 'reset',
  search = 'search',
  submit = 'submit',
  tel = 'tel',
  text = 'text',
  time = 'time',
  url = 'url',
  week = 'week'
}

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements AfterViewInit {
  private isAutofocus = true;

  constructor(private element: ElementRef) {
  }

  @Input() set autofocus(value) {
    this.isAutofocus = !!value;
  }

  ngAfterViewInit(): void {
    if (this.isAutofocus) {
      this.focus();
    }
  }

  public focus() {
    this.element.nativeElement.focus();
  }
}
