import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdeudoComponent } from './lista-adeudo.component';

describe('ListaAdeudoComponent', () => {
  let component: ListaAdeudoComponent;
  let fixture: ComponentFixture<ListaAdeudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAdeudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAdeudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
