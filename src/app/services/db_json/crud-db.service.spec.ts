import { TestBed } from '@angular/core/testing';

import { CrudDbService } from './crud-db.service';

describe('CrudDbService', () => {
  let service: CrudDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
