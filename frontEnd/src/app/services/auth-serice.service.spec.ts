import { TestBed } from '@angular/core/testing';

import { AuthSericeService } from './auth-serice.service';

describe('AuthSericeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthSericeService = TestBed.get(AuthSericeService);
    expect(service).toBeTruthy();
  });
});
