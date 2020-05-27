import { TestBed } from '@angular/core/testing';

import { WebShareService } from './web-share.service';

describe('WebShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebShareService = TestBed.get(WebShareService);
    expect(service).toBeTruthy();
  });
});
