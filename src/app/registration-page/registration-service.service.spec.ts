import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RegistrationServiceService } from './registration-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistrationServiceService', () => {
  let service: RegistrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegistrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
