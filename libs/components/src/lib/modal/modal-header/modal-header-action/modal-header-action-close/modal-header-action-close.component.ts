import { Component, ElementRef, Host, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { ModalHeaderComponent } from '../../modal-header.component';
import { ModalHeaderActionComponent } from '../modal-header-action/modal-header-action.component';
import { ModalComponent } from '../../../modal.component';

@Component({
  selector: 'modal-header-action-close',
  templateUrl: './modal-header-action-close.component.html',
  styleUrls: ['./modal-header-action-close.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalHeaderActionCloseComponent extends ModalHeaderActionComponent implements OnInit {
  constructor(@Host() @Optional() public modalHeader: ModalHeaderComponent,
              @Host() @Optional() public modal: ModalComponent,
              public element: ElementRef) {
    super(modalHeader, modal, element);
  }

  ngOnInit() {
    super.ngOnInit();
    this.clicked.subscribe((event) => {
      this.modalHeader ? this.modalHeader.modal.handleClose() : this.modal.handleClose();
    });
  }
}
