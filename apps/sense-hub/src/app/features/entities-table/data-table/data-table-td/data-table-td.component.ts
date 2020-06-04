import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: '[shDataTableTd]',
  templateUrl: './data-table-td.component.html',
  styleUrls: ['./data-table-td.component.css']
})
export class DataTableTdComponent implements OnInit {

  constructor(public element: ElementRef,
              private formBuilder: FormBuilder) {
  }

  @Input() value: any;
  @Output() edited = new EventEmitter<any>();

  public isEditMode = false;
  public form: FormGroup;

  @Input() public isEditable;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      string: [this.value, []]
    });
  }

  private save(string) {
    if (this.value !== string) {
      this.edited.emit(string);
    }
  }

  public enableEditMode() {
    this.isEditMode = true;
  }

  public disableEditMode() {
    this.isEditMode = false;
  }

}
