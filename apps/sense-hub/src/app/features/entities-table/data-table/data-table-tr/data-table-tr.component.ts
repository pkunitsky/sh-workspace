import { Component, ContentChildren, OnInit } from '@angular/core';
import { DataTableTdComponent } from '../data-table-td/data-table-td.component';

@Component({
  selector: '[shDataTableTr]',
  templateUrl: './data-table-tr.component.html',
  styleUrls: ['./data-table-tr.component.css']
})
export class DataTableTrComponent implements OnInit {
  @ContentChildren(DataTableTdComponent) cells: Array<DataTableTdComponent>;

  constructor() { }

  ngOnInit(): void {
  }

}
