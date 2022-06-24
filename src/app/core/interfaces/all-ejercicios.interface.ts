import { ITipoEjercicio } from './tipo-ejercicio.interface';
export interface IEjercicios {
  paginaActual: number;
  total: number;
  totalPagina: number;
  list: Ejercicio[];
}

export interface Ejercicio {
  idEjercicio: number | null;
  nombreEjercicio: string;
  dscEjercicio: string;
  tipoEjercicio: ITipoEjercicio;
}
