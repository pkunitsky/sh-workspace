import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EntitiesTableFields } from '../entities-table-fields';
import { FormBuilder, Validators } from '@angular/forms';
import { EntitiesControllerService } from '@workspace-sense-hub/sh-api';

@Component({
  selector: 'sh-add-entity-modal',
  templateUrl: './add-entity-modal.component.html',
  styleUrls: ['./add-entity-modal.component.css']
})
export class AddEntityModalComponent implements OnInit {
  readonly EntityFields = EntitiesTableFields;

  constructor(private formBuilder: FormBuilder,
              private entitiesControllerService: EntitiesControllerService) { }

  form;
  submit$;

  @Output() closeOut = new EventEmitter();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [this.EntityFields.ageInDays]: [null, [Validators.required]],
      [this.EntityFields.newborns]: [null, [Validators.required]],
      [this.EntityFields.breedingNumber]: [null, [Validators.required]],
      [this.EntityFields.cowId]: [null, [Validators.required]],
      [this.EntityFields.healthIndex]: [null, [Validators.required]],
    });
  }

  submit(form) {
    this.submit$ = this.entitiesControllerService.postEntity(form.value);
  }

  handleResponse() {
    this.closeOut.emit(this.form.value);
  }

}
