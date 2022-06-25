import { IRegistro } from './registro.interface';
export interface IEspecialistas {
  list: IEspecialista[];
  paginaActual: number;
  total: number;
  totalPagina: number;
}

export interface IEspecialista {
  fechaDeNacimiento: Date;
  idEspecialista: number;
  nombre: string;
  registro: IRegistro;
  tarjetaProfesional: string;
}
