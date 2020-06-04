import { AfterViewInit, ChangeDetectorRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export const searchTips = [
  'tip one',
  'tip two'
];


export class SearchComponentBase implements OnInit, AfterViewInit, OnDestroy {
  constructor(private router: Router,
              private cd: ChangeDetectorRef,
              private route: ActivatedRoute) {
  }

  @Input() value;
  @Input() queryParamName: string;
  @ViewChild('inputElement', {static: true}) inputElement;
  @Input() placeholder;
  @Input() tips: Array<string>;
  @Output() valueChange = new EventEmitter();

  private interval;
  private intervalTime = 3000;
  private prevTip = -1;
  private currentTip = 0;
  private nextTip = 1;
  private subs = new Subscription();

  clear() {
    if (this.queryParamName) {
      this.router.navigate([], {queryParams: {[this.queryParamName]: null}, queryParamsHandling: 'merge'});
    } else {
      this.value = null;
    }
  }

  ngOnInit() {
    if (this.queryParamName) {
      this.subs.add(this.route.queryParamMap.subscribe(map => {
        this.value = map.get(this.queryParamName);
      }));
    }
  }

  ngAfterViewInit(): void {
    if (this.tips) {
      this.interval = setInterval(() => {
        this.prevTip = this.currentTip;
        this.currentTip = (this.currentTip + 1) % (this.tips.length);
        this.nextTip = (this.currentTip + 1) % (this.tips.length);
      }, this.intervalTime);
    }
    this.inputElement.nativeElement.focus();

    if (!this.cd['destroyed']) {
      this.cd.detectChanges();
    }
  }

  handleValueChange(value) {
    this.valueChange.emit(value);
    if (this.queryParamName) {
      this.router.navigate([], {queryParams: {[this.queryParamName]: value || null}, queryParamsHandling: 'merge'});
    }
  }

  checkFocus(element) {
    return document.activeElement === element;
  }

  ngOnDestroy() {
    if (this.queryParamName) {
      this.router.navigate([], {queryParams: {[this.queryParamName]: null}, queryParamsHandling: 'merge'});
    }
    clearInterval(this.interval);
    this.subs.unsubscribe();
  }

}
