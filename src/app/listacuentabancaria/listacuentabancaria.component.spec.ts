import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacuentabancariaComponent } from './listacuentabancaria.component';

describe('ListacuentabancariaComponent', () => {
  let component: ListacuentabancariaComponent;
  let fixture: ComponentFixture<ListacuentabancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacuentabancariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacuentabancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
