import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let id = 0;

@Component({
  selector: 'form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FormCheckboxComponent), multi: true}
  ],
  exportAs: 'checkboxComponent'
})
export class FormCheckboxComponent implements ControlValueAccessor, OnInit, OnDestroy {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private element: ElementRef) {
  }

  @Input() id: number = id++;
  @Input() queryParamName: string;
  @Input() multiple: boolean;
  @Input() autofocus: boolean;
  @Output() valueChange: EventEmitter<boolean> = new EventEmitter();
  @Input() @HostBinding('class.isLocked') isLocked: boolean;

  _value: boolean = false;

  @Input() get value() {
    return this._value;
  }

  set value(v) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
      if (v !== null) {
        this.valueChange.emit(v);
      }
    }
  }

  subs = new Subscription();
  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {
    this.subs.add(this.route.queryParamMap.subscribe(map => {
      if (map.has(this.queryParamName)) {
        if (this.multiple) {
          this.value = map.getAll(this.queryParamName).findIndex(value => value === String(this.id)) !== -1;
        } else {
          this.value = map.has(this.queryParamName);
        }
      }
    }));
  }

  handleCheck(checked) {
    this.value = checked;

    if (this.queryParamName) {
      let list: any = new URLSearchParams(window.location.search).getAll(this.queryParamName);

      if (checked) {
        list.push(this.id);
      } else {
        list = list.filter(value => value !== String(this.id));
      }

      this.router.navigate([], {queryParamsHandling: 'merge', queryParams: {[this.queryParamName]: list.length ? list : null}});
    }
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  stopImmediatePropagation(event) {
    if (!this.isLocked) {
      event.stopImmediatePropagation();
      this.element.nativeElement.click();
    } else {
      event.preventDefault();
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
