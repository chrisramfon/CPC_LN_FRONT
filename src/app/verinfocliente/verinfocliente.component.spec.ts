import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinfoclienteComponent } from './verinfocliente.component';

describe('VerinfoclienteComponent', () => {
  let component: VerinfoclienteComponent;
  let fixture: ComponentFixture<VerinfoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerinfoclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinfoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
