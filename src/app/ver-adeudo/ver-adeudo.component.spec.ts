import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAdeudoComponent } from './ver-adeudo.component';

describe('VerAdeudoComponent', () => {
  let component: VerAdeudoComponent;
  let fixture: ComponentFixture<VerAdeudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAdeudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAdeudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
