import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { EspecialistaService } from '../services/especialista.service';
import { RegistroForm } from '../core/interfaces/registro.interface';
import { EspecialistaForm } from '../core/interfaces/especialista.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.scss'],
})
export class EspecialistaComponent implements OnInit {
  public isCreating!: boolean;
  public especialistaForm!: FormGroup;
  public preload!: boolean;
  public dataSource!: any;

  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'fecha_nacimiento',
    'tarjeta',
    'acciones',
  ];

  constructor(
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    private especialistaService: EspecialistaService,
    private router: Router
  ) {
    this.preload = true;
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

  ngOnInit(): void {
    this.cargarEspecialistas();
  }

  crearEspecialista() {
    this.isCreating = true;
  }

  cargarEspecialistas() {
    this.especialistaService.getEspecialistas().subscribe((res) => {
      this.dataSource = res.list;
      this.preload = false;
    });
  }

  crear() {
    if (this.especialistaForm.invalid) {
      this.especialistaForm.markAllAsTouched();
    } else {
      this.preload = true;
      const aux = new RegistroForm(new Date());

      this.especialistaService.postCrearRegistro(aux).subscribe((res) => {
        const registro = res;
        const aux = new EspecialistaForm(
          this.especialistaForm.get('fechaDeNacimiento')?.value,
          this.especialistaForm.get('nombre')?.value,
          registro,
          this.especialistaForm.get('tarjetaProfesional')?.value
        );
        this.especialistaService.postCrearEspecialista(aux).subscribe((res) => {
          console.log(res);
          this.preload = false;
          let currentUrl = this.router.url;
          this.router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this.router.navigate([currentUrl]);
            });
        });
      });
    }
  }

  cancelProcess() {
    this.isCreating = false;
    this.especialistaForm.reset();
  }

  goToEdit(element: any) {}

  deleteEjercicio(element: any) {}
}
