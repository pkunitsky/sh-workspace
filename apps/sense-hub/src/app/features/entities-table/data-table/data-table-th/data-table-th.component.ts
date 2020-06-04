import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[shDataTableTh]',
  templateUrl: './data-table-th.component.html',
  styleUrls: ['./data-table-th.component.css']
})
export class DataTableThComponent implements OnInit {

  @Input() isSorting: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
