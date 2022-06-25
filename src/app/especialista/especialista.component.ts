import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.scss'],
})
export class EspecialistaComponent implements OnInit {
  public isCreating!: boolean;
  public especialistaForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.isCreating = false;
    this.especialistaForm = this.fb.group({
      fechaDeNacimiento: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      registro: [''],
      tarjetaProfesional: ['', [Validators.required]],
    });
  }
  get fechaDeNacimientoIsInvalid(): boolean {
    return (this.especialistaForm.get('fechaDeNacimiento')?.invalid &&
      this.especialistaForm.get('fechaDeNacimiento')?.touched) as boolean;
  }

  get nombreIsInvalid(): boolean {
    return (this.especialistaForm.get('nombre')?.invalid &&
      this.especialistaForm.get('nombre')?.touched) as boolean;
  }

  get tarjetaIsInvalid(): boolean {
    return (this.especialistaForm.get('tarjetaProfesional')?.invalid &&
      this.especialistaForm.get('tarjetaProfesional')?.touched) as boolean;
  }

  ngOnInit(): void {}

  crearEspecialista() {
    this.isCreating = true;
  }

  crear() {
    if (this.especialistaForm.invalid) {
      this.especialistaForm.markAllAsTouched();
    } else {
      console.log('CREANDO');
    }
  }

  cancelProcess() {
    this.isCreating = false;
    this.especialistaForm.reset();
  }
}
