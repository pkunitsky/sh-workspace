import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FormInputComponent), multi: true}
  ]
})
export class FormInputComponent implements ControlValueAccessor, OnInit {
  @Input() @HostBinding('class.disabled') disabled: boolean;
  @Input() @HostBinding('attr.type') type: string = 'text';
  @Input() placeholder: string;
  @Output() valueChange = new EventEmitter<string>();
  @Output() focusin = new EventEmitter();
  @Output() focusout = new EventEmitter();
  @ViewChild('inputElement', {static: true}) inputElement: ElementRef;

  private _value;

  @Input() get value() {
    return this._value;
  }

  set value(v) {
    this._value = v;
  }

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  handleChange(value: string) {
    this.onChange(value);
    this.valueChange.emit(value);
  }
}
