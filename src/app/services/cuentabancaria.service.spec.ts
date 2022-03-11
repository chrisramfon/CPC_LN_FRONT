import { TestBed } from '@angular/core/testing';

import { CuentabancariaService } from './cuentabancaria.service';

describe('CuentabancariaService', () => {
  let service: CuentabancariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentabancariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
