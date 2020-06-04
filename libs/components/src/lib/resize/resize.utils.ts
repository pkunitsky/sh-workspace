import { HostListener, Injectable } from '@angular/core';

@Injectable()
export class Resize {
  @HostListener('click', ['$event']) handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  @HostListener('mousedown', ['$event']) handleMousedown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
}
