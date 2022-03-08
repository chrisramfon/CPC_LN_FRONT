import { TestBed } from '@angular/core/testing';

import { AdeudoService } from './adeudo.service';

describe('AdeudoService', () => {
  let service: AdeudoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdeudoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
