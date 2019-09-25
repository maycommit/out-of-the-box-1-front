import { TestBed } from '@angular/core/testing';

import { RappersService } from './rappers.service';

describe('RappersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RappersService = TestBed.get(RappersService);
    expect(service).toBeTruthy();
  });
});
