import { EjerciciosService } from './../services/ejercicios.service';
import { Component, OnInit } from '@angular/core';
import {
  ITipoEjercicios,
  ITipoEjercicio,
} from '../core/interfaces/tipo-ejercicio.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CrearTipoEjercicioDialogComponent } from '../components/crear-tipo-ejercicio-dialog/crear-tipo-ejercicio-dialog.component';
import { EjercicioForm } from '../core/interfaces/ejercicio.interface';

@Component({
  selector: 'app-ejercicio-page',
  templateUrl: './ejercicio-page.component.html',
  styleUrls: ['./ejercicio-page.component.scss'],
})
export class EjercicioPageComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'nombre', 'descripcion', 'tipo'];
  public dataSource!: any;
  public preload!: boolean;
  public isCreating!: boolean;
  public listaDeTiposDeEjercicios!: ITipoEjercicios;
  public ejercicioForm: FormGroup;
  private formDataEjercicio!: EjercicioForm;
  public color = '#';
  public letters = '0123456789ABCDEF';

  constructor(
    private ejerciciosService: EjerciciosService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.preload = true;
    this.isCreating = false;

    this.getRandomColor();

    this.ejercicioForm = this.fb.group({
      dscEjercicio: ['', [Validators.required]],
      nombreEjercicio: ['', [Validators.required]],
      tipoEjercicio: ['', [Validators.required]],
    });
  }

  get dscEjercicioIsInvalid(): boolean {
    return (this.ejercicioForm.get('dscEjercicio')?.invalid &&
      this.ejercicioForm.get('dscEjercicio')?.touched) as boolean;
  }

  get nombreIsInvalid(): boolean {
    return (this.ejercicioForm.get('nombreEjercicio')?.invalid &&
      this.ejercicioForm.get('nombreEjercicio')?.touched) as boolean;
  }

  get tipoIsInvalid(): boolean {
    return (this.ejercicioForm.get('tipoEjercicio')?.invalid &&
      this.ejercicioForm.get('tipoEjercicio')?.touched) as boolean;
  }

  ngOnInit(): void {
    this._getTodosEjercicios();
    this._getTiposDeEjercicios();
    this.preload = false;
  }

  async _getTodosEjercicios() {
    await this.ejerciciosService.getTodosEjercicios().subscribe((res) => {
      this.dataSource = res.list;
    });
  }

  async _getTiposDeEjercicios() {
    await this.ejerciciosService.getTiposDeEjercicio().subscribe((res) => {
      this.listaDeTiposDeEjercicios = res;
    });
  }

  createEjercicio() {
    if (this.ejercicioForm.invalid) {
      this.ejercicioForm.markAllAsTouched();
    } else {
      this.preload = true;

      this.ejerciciosService
        .getTipoDeEjercicioById(this.ejercicioForm.get('tipoEjercicio')?.value)
        .subscribe((res) => {
          this.formDataEjercicio = new EjercicioForm(
            this.ejercicioForm.get('dscEjercicio')?.value,
            this.ejercicioForm.get('nombreEjercicio')?.value,
            res
          );

          this.ejerciciosService
            .postCrearEjercicio(this.formDataEjercicio)
            .subscribe((__: any) => {
              this.preload = false;
              this.ejercicioForm.reset();
            });
        });
    }
  }

  abrirDialog() {
    const dialogRef = this.dialog.open(CrearTipoEjercicioDialogComponent, {
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      width: '500px',
    });

    dialogRef.afterClosed().subscribe();
  }

  crearEjercicio() {
    this.isCreating = true;
  }

  cancelProcess() {
    this.isCreating = false;
    this.ejercicioForm.reset();
  }

  getRandomColor() {
    this.color = '#'; // <-----------
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }
}
