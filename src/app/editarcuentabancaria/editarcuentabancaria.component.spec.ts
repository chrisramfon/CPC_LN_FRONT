import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcuentabancariaComponent } from './editarcuentabancaria.component';

describe('EditarcuentabancariaComponent', () => {
  let component: EditarcuentabancariaComponent;
  let fixture: ComponentFixture<EditarcuentabancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcuentabancariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcuentabancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
