import { TestBed } from '@angular/core/testing';

import { MobileService } from './mobile.service';

describe('MobileService', () => {
  let service: MobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update is mobile when calling isMobile', () => {
    service.setIsMobile(true);

    expect((service as any).isMobile).toBe(true);
  });
});
