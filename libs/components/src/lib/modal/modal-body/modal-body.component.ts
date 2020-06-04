import { Component, Host, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'modal-body',
  templateUrl: './modal-body.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './modal-body.component.scss'
  ]
})
export class ModalBodyComponent implements OnInit {

  constructor(@Host() public modal: ModalComponent) {
  }

  ngOnInit() {
  }

}
