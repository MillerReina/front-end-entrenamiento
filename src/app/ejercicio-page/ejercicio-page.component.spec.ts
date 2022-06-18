import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioPageComponent } from './ejercicio-page.component';

describe('EjercicioPageComponent', () => {
  let component: EjercicioPageComponent;
  let fixture: ComponentFixture<EjercicioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
