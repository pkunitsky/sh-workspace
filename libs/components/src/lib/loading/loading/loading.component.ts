import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'loading, [loading]',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: []
})
export class LoadingComponent implements OnChanges, OnDestroy {
  private subscription = new Subscription();

  errorStatus: number;

  @Input() active = false;
  @Input() failed = false;
  @Input() completed = false;
  @Input() observable: Observable<any>;

  @Output() dataOut = new EventEmitter();
  @Output() errorOut = new EventEmitter();

  @Input() useTemplate = false;
  @ContentChild(TemplateRef, {static: true}) template;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.completed && this.completed) {
      return this.subscription.unsubscribe();
    }

    if (changes.observable && changes.observable.previousValue !== changes.observable.currentValue) {
      this.refresh();
    }

    if (changes.active && !changes.active.firstChange && changes.active.previousValue === true && changes.active.currentValue === false) {
      this.subscription.unsubscribe();
    }
  }

  refresh(): void {
    this.subscription.unsubscribe();

    if (this.observable instanceof Observable) {
      this.failed = false;
      this.completed = false;
      this.active = true;

      this.subscription = this.observable.subscribe(
        data => {
          this.dataOut.emit(data);
          this.active = false;
          this.completed = true;
        },

        error => {
          this.errorOut.emit(error);
          this.failed = true;
          this.active = false;
          this.errorStatus = error && error.error && error.error.status;
        },

        () => {
          this.completed = true;
          this.active = false;
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
