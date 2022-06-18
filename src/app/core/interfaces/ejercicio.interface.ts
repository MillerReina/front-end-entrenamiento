import { ITipoEjercicio } from './tipo-ejercicio.interface';
export class EjercicioForm {
  public dscEjercicio: string;
  public nombreEjercicio: string;
  public tipoEjercicio: ITipoEjercicio;

  constructor(
    dscEjercicio: string,
    nombreEjercicio: string,
    tipoEjercicio: ITipoEjercicio
  ) {
    this.dscEjercicio = dscEjercicio;
    this.nombreEjercicio = nombreEjercicio;
    this.tipoEjercicio = tipoEjercicio;
  }
}
