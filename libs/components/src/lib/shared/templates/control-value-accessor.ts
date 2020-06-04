import { EventEmitter, forwardRef, HostBinding, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const component = {
  selector: '',
  templateUrl: 'control-value-accessor',
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ControlValueAccessorTemplate), multi: true}
  ]
};
class ControlValueAccessorTemplate implements ControlValueAccessor {
  _value = null;
  @Input() @HostBinding('class.isDisabled') isDisabled = false;

  get value() {
    return this._value;
  }

  @Input() set value(v) {
    this._value = v;
    this.onChange(v);
    this.valueChange.emit(v);
  }

  @Output() valueChange = new EventEmitter();

  onChange = (v) => {};
  onTouched = (v) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  handleChange(v) {
    this.value = v;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
