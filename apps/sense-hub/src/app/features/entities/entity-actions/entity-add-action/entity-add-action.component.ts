import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EntitiesGridFields } from '../../entities-grid/entities-grid-fields.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntitiesControllerService } from '@workspace-sense-hub/sh-api';

@Component({
  selector: 'sh-entity-add-action',
  templateUrl: './entity-add-action.component.html',
  styleUrls: ['./entity-add-action.component.scss']
})
export class EntityAddActionComponent implements OnInit {
  readonly EntityFields = EntitiesGridFields;

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

  submit(form: FormGroup) {
    this.submit$ = this.entitiesControllerService.postEntity(form.value);
  }

  handleResponse() {
    this.form.reset();
    this.closeOut.emit(this.form.value);
  }

}
