import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EjerciciosService } from '../../services/ejercicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-tipo-ejercicio-dialog',
  templateUrl: './crear-tipo-ejercicio-dialog.component.html',
  styleUrls: ['./crear-tipo-ejercicio-dialog.component.scss'],
})
export class CrearTipoEjercicioDialogComponent implements OnInit {
  public tipoEjercicioForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CrearTipoEjercicioDialogComponent>,
    private fb: FormBuilder,
    private ejerciciosService: EjerciciosService,
    private router: Router
  ) {
    this.tipoEjercicioForm = this.fb.group({
      dscTipoEjercicio: ['', [Validators.required]],
    });
  }

  get dscEjercicioIsInvalid(): boolean {
    return (this.tipoEjercicioForm.get('dscTipoEjercicio')?.invalid &&
      this.tipoEjercicioForm.get('dscTipoEjercicio')?.touched) as boolean;
  }

  ngOnInit(): void {}

  crearTipoEjercicio() {
    if (this.tipoEjercicioForm.invalid) {
      this.tipoEjercicioForm.markAllAsTouched();
    } else {
      this.ejerciciosService
        .postCrearTipoEjercicio(this.tipoEjercicioForm.value)
        .subscribe((_) => {
          this.dialogRef.close();
          let currentUrl = this.router.url;
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([currentUrl]);
            });
        });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
