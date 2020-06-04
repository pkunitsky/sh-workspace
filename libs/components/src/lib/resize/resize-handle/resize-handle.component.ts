import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Resize } from '../resize.utils';

@Component({
  selector: 'resize-handle',
  templateUrl: './resize-handle.component.html',
  styleUrls: ['./resize-handle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResizeHandleComponent extends Resize implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
