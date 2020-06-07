import { TestBed } from '@angular/core/testing';

import { EntityViewModalService } from './entity-view-modal.service';

describe('EntityViewModalService', () => {
  let service: EntityViewModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityViewModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
