import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercuentabancariaComponent } from './vercuentabancaria.component';

describe('VercuentabancariaComponent', () => {
  let component: VercuentabancariaComponent;
  let fixture: ComponentFixture<VercuentabancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercuentabancariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VercuentabancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
