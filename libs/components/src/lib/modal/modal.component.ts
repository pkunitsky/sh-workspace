import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { debounce } from 'lodash';
import { appearDisappear, getComputedRect, getCoords } from './modal.utils';
import { PERFECT_SCROLLBAR_CONFIG_NO_WHEEL_PROPAGATION } from '../shared/constants/ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

export enum AnchorLocation {
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  center
}

export enum GrabPlaces {
  header,
  none,
  top,
  right,
  bottom,
  left,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
}

const initialZIndex = 900;
let maxZIndex = initialZIndex;
let numberOfOpenModals = 0;

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [appearDisappear]
})
export class ModalComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  readonly grabPlaces = GrabPlaces;
  readonly getCoords = getCoords;

  constructor(@Inject(DOCUMENT) private document: Document,
              private renderer: Renderer2,
              private ngZone: NgZone,
              private cd: ChangeDetectorRef) {
    if (numberOfOpenModals === 0) {
      maxZIndex = initialZIndex;
    }
    this.zIndex = ++maxZIndex;
  }

  public isGrabbed: boolean = false;
  public isResized: boolean = false;
  public isPinned: boolean = false;
  public isTransitionEnabled: boolean = false;
  public isCentered: boolean = true;
  public show: boolean = true;
  public modal: ClientRect;
  public config: PerfectScrollbarConfigInterface = PERFECT_SCROLLBAR_CONFIG_NO_WHEEL_PROPAGATION;
  public isBackgroundMaskVisible = true;

  private grabTop;
  private grabLeft;
  private grabPlace: GrabPlaces = GrabPlaces.none;
  private subs: Subscription = new Subscription();

  @Input() top: number;
  @Input() left: number;
  @Input() bottom: number;
  @Input() right: number;
  @Input() width: number;
  @Input() height: number;
  @Input() minWidth: number = 20;
  @Input() minHeight: number = 20;
  @Input() anchorElement: HTMLElement;
  @Input() anchorLocation: AnchorLocation = AnchorLocation.topLeft;
  @Input() showBackgroundMask: boolean = true;
  @Input() isGrabbable: boolean = true;
  @Input() isCloseOnClickOutside: boolean = true;
  @Input() animationOriginElement: HTMLElement;
  @Input() noCloseButton: boolean = false;
  @Input() isPinnable: boolean = false;
  @Input() isResizable: boolean = false;
  @Input() isFullscreen: boolean = false;
  @Input() isAnimated: boolean = true;
  @Input() zIndex: number;
  @Output() closeOut: EventEmitter<void> = new EventEmitter();
  @ViewChild('element', {static: false}) element: ElementRef;

  @HostListener('window:resize', ['$event']) handleWindowResize = debounce((event) => {
    if (this.anchorElement) {
      this.locateModalToAnchor();
    }
  }, 70);

  @HostListener('mousedown', ['$event']) handleMousedown(event) {
    if (maxZIndex !== this.zIndex) {
      this.handleTouch();
    }
  }

  ngOnInit(): void {
    numberOfOpenModals++;

    if (this.animationOriginElement) {
      this.locateModalToAnimationOrigin();
    }

    if (this.showBackgroundMask) {
      this.addMask();
    }

    if (this.anchorElement) {
      this.isCentered = false;
    }

    if (this.top || this.left || this.right || this.bottom) {
      this.isCentered = false;
    }
  }

  ngAfterViewInit() {
    if (this.anchorElement) {
      this.locateModalToAnchor();
      return;
    }

    if (!this.top && !this.left) {
      this.locateModalToCenter();
    }

    if (this.animationOriginElement) {
      this.locateModalToCenter();
    }
  }

  ngOnChanges(changes) {
    if (this.element && changes.anchorElement && this.anchorElement) {
      this.renderer.addClass(this.element.nativeElement, 'isTransitionEnabled');
      this.locateModalToAnchor();
      const cb = this.renderer.listen(this.element.nativeElement, 'transitionend', () => {
        cb();
        if (this.element && this.element.nativeElement) {
          this.renderer.removeClass(this.element.nativeElement, 'isTransitionEnabled');
        }
      });
    }
  }

  handleTouch() {
    this.zIndex = ++maxZIndex;
  }

  handleHeaderMousedown(event) {
    this.isGrabbed = true;
    this.grabPlace = GrabPlaces.header;
    this.grab(event);
    this.handleTouch();
  }

  enableResize(event, grabPlace: GrabPlaces) {
    if (this.isResizable) {
      this.isResized = true;
      this.grabPlace = grabPlace;
      this.grab(event);
    }
  }

  grab(event) {
    this.modal = this.element.nativeElement.getBoundingClientRect();
    this.top = this.modal.top;
    this.left = this.modal.left;
    this.width = this.modal.width;
    this.height = this.modal.height;
    this.isCentered = false;
    this.grabTop = event.pageY;
    this.grabLeft = event.pageX;

    this.ngZone.runOutsideAngular(() => {
      const removeMousemoveListener = this.renderer.listen('window', 'mousemove', (mousemoveEvent) => {
        mousemoveEvent.preventDefault();

        if (mousemoveEvent.pageX <= 0 || mousemoveEvent.pageY <= 0 || mousemoveEvent.pageX >= window.innerWidth || mousemoveEvent.pageY >= window.innerHeight) {
          removeMousemoveListener();
          this.drop();
          return;
        }

        switch (this.grabPlace) {
          case GrabPlaces.none:
            break;

          case GrabPlaces.header:
            this.top = this.top + mousemoveEvent.pageY - this.grabTop;
            this.left = this.left + mousemoveEvent.pageX - this.grabLeft;
            break;

          case GrabPlaces.top:
            this.top = this.top + mousemoveEvent.pageY - this.grabTop;
            this.height = this.height + this.grabTop - mousemoveEvent.pageY;
            break;

          case GrabPlaces.right:
            this.width = this.width + mousemoveEvent.pageX - this.grabLeft;
            break;

          case GrabPlaces.bottom:
            this.height = this.height + mousemoveEvent.pageY - this.grabTop;
            break;

          case GrabPlaces.left:
            this.left = this.left + mousemoveEvent.pageX - this.grabLeft;
            this.width = this.width + this.grabLeft - mousemoveEvent.pageX;
            break;

          case GrabPlaces.topLeft:
            this.top = this.top + mousemoveEvent.pageY - this.grabTop;
            this.height = this.height + this.grabTop - mousemoveEvent.pageY;
            this.width = this.width + this.grabLeft - mousemoveEvent.pageX;
            this.left = this.left + mousemoveEvent.pageX - this.grabLeft;
            break;

          case GrabPlaces.topRight:
            this.top = this.top + mousemoveEvent.pageY - this.grabTop;
            this.height = this.height + this.grabTop - mousemoveEvent.pageY;
            this.width = this.width + mousemoveEvent.pageX - this.grabLeft;
            break;

          case GrabPlaces.bottomLeft:
            this.height = this.height + mousemoveEvent.pageY - this.grabTop;
            this.width = this.width + this.grabLeft - mousemoveEvent.pageX;
            this.left = this.left + mousemoveEvent.pageX - this.grabLeft;
            break;

          case GrabPlaces.bottomRight:
            this.width = this.width + mousemoveEvent.pageX - this.grabLeft;
            this.height = this.height + mousemoveEvent.pageY - this.grabTop;
            break;
        }

        this.cd.detectChanges();
        this.grabTop = mousemoveEvent.pageY;
        this.grabLeft = mousemoveEvent.pageX;
      });

      const removeMouseupListener = this.renderer.listen('window', 'mouseup', (mouseupEvent) => {
        removeMouseupListener();
        removeMousemoveListener();
        this.drop();
        this.cd.detectChanges();
      });
    });
  }

  @HostListener('document:keydown.escape', ['$event']) handleClose() {
    this.top = this.element.nativeElement.getBoundingClientRect().top;
    this.left = this.element.nativeElement.getBoundingClientRect().left;
    this.isCentered = false;
    this.cd.detectChanges();
    this.close();
  }

  drop() {
    this.isGrabbed = false;
    this.isResized = false;
    this.grabPlace = GrabPlaces.none;
  }

  addMask() {
    this.isBackgroundMaskVisible = true;
  }

  removeMask() {
    this.isBackgroundMaskVisible = false;
  }

  close() {
    this.show = false;

    if (!this.isAnimated) {
      this.closeOut.emit();
    }
  }

  locateModalToCenter() {
    this.isCentered = true;
    this.top = null;
    this.left = null;
    this.cd.detectChanges();
  }

  locateModalToAnchor() {
    switch (this.anchorLocation) {
      case AnchorLocation.center:
        this.top = this.anchorElement.getBoundingClientRect().top - (this.height / 2) + (this.anchorElement.getBoundingClientRect().height / 2);
        this.left = this.anchorElement.getBoundingClientRect().left - (this.width / 2) + (this.anchorElement.getBoundingClientRect().width / 2);
        break;
      case AnchorLocation.topLeft:
        this.top = this.getCoords(getComputedRect(this.element.nativeElement), null, null, this.anchorElement).top;
        this.left = this.getCoords(getComputedRect(this.element.nativeElement), null, null, this.anchorElement).left;
        this.bottom = this.getCoords(getComputedRect(this.element.nativeElement), null, null, this.anchorElement).bottom;
        this.right = this.getCoords(getComputedRect(this.element.nativeElement), null, null, this.anchorElement).right;
        break;
    }
    this.normalize();
    this.isCentered = false;
    this.cd.detectChanges();
  }

  normalize() {
    const margin = 25;

    if (this.top + this.height + margin > window.innerHeight) {
      this.top = window.innerHeight - this.height - margin;
    }

    if (this.left + this.width + margin > window.innerWidth) {
      this.left = window.innerWidth - this.width - margin;
    }

    if (this.left < margin) {
      this.left = margin;
    }

    if (this.top < margin) {
      this.top = margin;
    }
  }

  locateModalToAnimationOrigin() {
    this.isCentered = false;
    this.top = this.animationOriginElement.getBoundingClientRect().top;
    this.left = this.animationOriginElement.getBoundingClientRect().left;
  }

  handleAnimationEnd() {
    if (!this.show) {
      // disappear
      this.removeMask();
      this.closeOut.emit();

    } else {
      // appear
      if (this.isCloseOnClickOutside) {
        const removeClickListener = this.renderer.listen('document', 'click', (event) => {
          if (!this.element.nativeElement.contains(event.target)) {
            event.stopPropagation();
            event.preventDefault();
            removeClickListener();
            // this.close();
          }
        });
      }
    }
  }

  handleClickOutside() {
    if (this.isCloseOnClickOutside) {
      this.close();
    }
  }

  ngOnDestroy(): void {
    if (this.showBackgroundMask) {
      this.removeMask();
    }
    this.subs.unsubscribe();
    numberOfOpenModals--;
  }
}
