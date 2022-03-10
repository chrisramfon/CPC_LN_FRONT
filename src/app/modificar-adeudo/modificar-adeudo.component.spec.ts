import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAdeudoComponent } from './modificar-adeudo.component';

describe('ModificarAdeudoComponent', () => {
  let component: ModificarAdeudoComponent;
  let fixture: ComponentFixture<ModificarAdeudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAdeudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAdeudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
