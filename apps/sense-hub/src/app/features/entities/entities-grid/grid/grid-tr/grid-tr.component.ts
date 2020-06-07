import { Component, ContentChildren, OnInit } from '@angular/core';
import { GridTdComponent } from '../grid-td/grid-td.component';

@Component({
  selector: '[shGridTr]',
  templateUrl: './grid-tr.component.html',
  styleUrls: ['./grid-tr.component.css']
})
export class GridTrComponent implements OnInit {
  @ContentChildren(GridTdComponent) cells: Array<GridTdComponent>;

  constructor() { }

  ngOnInit(): void {
  }

}
