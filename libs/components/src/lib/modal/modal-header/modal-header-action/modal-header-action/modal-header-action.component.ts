import { Component, ElementRef, EventEmitter, Host, HostListener, OnInit, Optional, Output, ViewEncapsulation } from '@angular/core';
import { ModalHeaderComponent } from '../../modal-header.component';
import { ModalComponent } from '../../../modal.component';

@Component({
  selector: 'modal-header-action',
  templateUrl: './modal-header-action.component.html',
  styleUrls: ['./modal-header-action.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalHeaderActionComponent implements OnInit {
  constructor(@Host() @Optional() public modalHeader: ModalHeaderComponent,
              @Host() @Optional() public modal: ModalComponent,
              public element: ElementRef) {
  }

  @Output() clicked = new EventEmitter();

  ngOnInit() {
  }

  @HostListener('mousedown', ['$event']) handleMousedown(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  @HostListener('click', ['$event']) handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    this.clicked.emit(event);
  }
}
