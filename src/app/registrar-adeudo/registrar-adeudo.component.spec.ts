import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAdeudoComponent } from './registrar-adeudo.component';

describe('RegistrarAdeudoComponent', () => {
  let component: RegistrarAdeudoComponent;
  let fixture: ComponentFixture<RegistrarAdeudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAdeudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAdeudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
