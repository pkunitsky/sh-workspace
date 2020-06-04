import { AfterContentInit, Component, ContentChildren, HostListener, OnInit, QueryList } from '@angular/core';
import { DataTableTdComponent } from '../data-table-td/data-table-td.component';

@Component({
  selector: '[shDataTableTbody]',
  templateUrl: './data-table-tbody.component.html',
  styleUrls: ['./data-table-tbody.component.css']
})
export class DataTableTbodyComponent implements OnInit, AfterContentInit {

  constructor() { }

  @ContentChildren(DataTableTdComponent, {descendants: true}) dtTableDatas: QueryList<DataTableTdComponent>;

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
  }

  @HostListener('click', ['$event']) handleDelegateClick(event): void {
    const editableCells = this.dtTableDatas.toArray().filter(dttd => dttd.isEditable);

    for (const dtTableData of editableCells) {
      if (dtTableData.element.nativeElement.contains(event.target)) {
        editableCells.forEach(cell => cell.disableEditMode());
        dtTableData.enableEditMode();
        return null;
      }
    }

    return editableCells.forEach(cell => cell.disableEditMode());
  }

}
