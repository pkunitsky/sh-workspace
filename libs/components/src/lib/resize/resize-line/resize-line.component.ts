import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Resize } from '../resize.utils';

@Component({
  selector: 'resize-line',
  templateUrl: './resize-line.component.html',
  styleUrls: ['./resize-line.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResizeLineComponent extends Resize implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
