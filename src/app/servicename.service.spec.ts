import { TestBed } from '@angular/core/testing';

import { ServicenameService } from './servicename.service';

describe('ServicenameService', () => {
  let service: ServicenameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicenameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
