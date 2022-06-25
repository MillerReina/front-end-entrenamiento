import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { EspecialistaService } from '../services/especialista.service';
import { RegistroForm } from '../core/interfaces/registro.interface';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.scss'],
})
export class EspecialistaComponent implements OnInit {
  public isCreating!: boolean;
  public especialistaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    private especialistaService: EspecialistaService
  ) {
    this.isCreating = false;
    this.dateAdapter.setLocale('es-CO');
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
      const aux = new RegistroForm(
        this.especialistaForm.get('fechaDeNacimiento')?.value
      );

      this.especialistaService.postCrearRegistro(aux).subscribe((res) => {
        console.log(res.idRegistro);
      });
    }
  }

  cancelProcess() {
    this.isCreating = false;
    this.especialistaForm.reset();
  }
}
