import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Entity } from '@workspace-sense-hub/sh-api';

@Injectable({
  providedIn: 'root'
})
export class EntityViewModalService {

  constructor() { }

  entity;
  anchor;
  isModalOpen$ = new BehaviorSubject(false);

  openModal(entity: Entity, anchor?: HTMLElement) {
    this.entity = entity;
    this.anchor = anchor;
    this.isModalOpen$.next(true);
  }

  closeModal() {
    this.entity = null;
    this.anchor = null;
    this.isModalOpen$.next(false);
  }

}
