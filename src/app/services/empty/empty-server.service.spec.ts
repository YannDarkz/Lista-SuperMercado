import { TestBed } from '@angular/core/testing';

import { EmptyServerService } from './empty-server.service';

describe('EmptyServerService', () => {
  let service: EmptyServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmptyServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
