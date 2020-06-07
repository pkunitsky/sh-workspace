import { AfterContentInit, Component, ContentChildren, HostListener, OnInit, QueryList } from '@angular/core';
import { GridTdComponent } from '../grid-td/grid-td.component';

@Component({
  selector: '[shGridTbody]',
  templateUrl: './grid-tbody.component.html',
  styleUrls: ['./grid-tbody.component.css']
})
export class GridTbodyComponent implements OnInit, AfterContentInit {

  constructor() { }

  @ContentChildren(GridTdComponent, {descendants: true}) dtTableDatas: QueryList<GridTdComponent>;

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
