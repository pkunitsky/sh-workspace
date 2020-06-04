import { ModalComponent } from '../modal.component';
import { Component, Host, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalHeaderComponent implements OnInit {
  constructor(@Host() public modal: ModalComponent) {
  }

  @HostListener('mousedown', ['$event']) handleMousedown(event) {
    if (this.modal.isGrabbable) {
      this.modal.handleHeaderMousedown(event);
    }
  }

  ngOnInit() {
  }
}
