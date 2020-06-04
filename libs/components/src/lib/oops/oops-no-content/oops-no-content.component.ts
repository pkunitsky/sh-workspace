import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'oops-no-content',
  templateUrl: './oops-no-content.component.html',
  styleUrls: ['./oops-no-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OopsNoContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
