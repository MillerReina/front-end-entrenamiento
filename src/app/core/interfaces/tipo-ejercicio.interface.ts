export interface ITipoEjercicios {
  list: ITipoEjercicio[];
  paginaActual: number;
  total: number;
  totalPagina: number;
}

export interface ITipoEjercicio {
  dscTipoEjercicio: string;
  idTipoEjercicio: number;
}
