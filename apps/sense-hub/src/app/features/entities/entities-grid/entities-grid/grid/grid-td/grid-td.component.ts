import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: '[shGridTd]',
  templateUrl: './grid-td.component.html',
  styleUrls: ['./grid-td.component.css']
})
export class GridTdComponent implements OnInit {
  readonly JSON = JSON;

  constructor(public element: ElementRef,
              private formBuilder: FormBuilder) {
  }

  @Input() value: any;
  @Input() isEditable;
  @Output() editOut = new EventEmitter<any>();

  public isEditMode = false;
  public form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      string: [this.value, []]
    });
  }

  public save(string) {
    this.isEditMode = false;

    if (this.value !== string) {
      this.editOut.emit(string);
    }
  }

  public enableEditMode() {
    this.isEditMode = true;
  }

  public disableEditMode() {
    this.isEditMode = false;
  }

}
