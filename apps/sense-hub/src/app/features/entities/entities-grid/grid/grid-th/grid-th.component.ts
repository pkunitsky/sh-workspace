import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[shGridTh]',
  templateUrl: './grid-th.component.html',
  styleUrls: ['./grid-th.component.css']
})
export class GridThComponent implements OnInit {

  @Input() isSorting: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
