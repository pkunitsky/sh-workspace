import { Component, Host, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'modal-actions',
  templateUrl: './modal-actions.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './modal-actions.component.scss'
  ]
})
export class ModalActionsComponent implements OnInit {

  constructor(@Host() public modal: ModalComponent) {
  }

  ngOnInit() {
  }

}
