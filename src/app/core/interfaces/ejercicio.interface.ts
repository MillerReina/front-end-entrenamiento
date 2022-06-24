import { ITipoEjercicio } from './tipo-ejercicio.interface';
export class EjercicioForm {
  public idEjercicio: number | null;
  public dscEjercicio: string;
  public nombreEjercicio: string;
  public tipoEjercicio: ITipoEjercicio;

  constructor(
    dscEjercicio: string,
    nombreEjercicio: string,
    tipoEjercicio: ITipoEjercicio,
    idEjercicio: number | null
  ) {
    this.dscEjercicio = dscEjercicio;
    this.nombreEjercicio = nombreEjercicio;
    this.tipoEjercicio = tipoEjercicio;
    this.idEjercicio = idEjercicio;
  }
}
