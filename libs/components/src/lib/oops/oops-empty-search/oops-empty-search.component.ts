import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'oops-empty-search',
  templateUrl: './oops-empty-search.component.html',
  styleUrls: ['./oops-empty-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OopsEmptySearchComponent implements OnInit {

  @Input() value;

  constructor() {
  }

  ngOnInit() {
  }

}
