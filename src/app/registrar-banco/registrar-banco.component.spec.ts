import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBancoComponent } from './registrar-banco.component';

describe('RegistrarBancoComponent', () => {
  let component: RegistrarBancoComponent;
  let fixture: ComponentFixture<RegistrarBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
