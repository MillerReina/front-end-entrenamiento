import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearTipoEjercicioDialogComponent } from './crear-tipo-ejercicio-dialog/crear-tipo-ejercicio-dialog.component';
import { AngularMaterialModule } from '../shared/material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrearTipoEjercicioDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ApplicationModule {}
