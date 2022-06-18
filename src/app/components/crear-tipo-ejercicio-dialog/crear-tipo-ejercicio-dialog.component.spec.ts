import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoEjercicioDialogComponent } from './crear-tipo-ejercicio-dialog.component';

describe('CrearTipoEjercicioDialogComponent', () => {
  let component: CrearTipoEjercicioDialogComponent;
  let fixture: ComponentFixture<CrearTipoEjercicioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoEjercicioDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoEjercicioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
