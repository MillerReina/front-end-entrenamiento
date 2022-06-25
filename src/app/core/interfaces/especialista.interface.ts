import { IRegistro } from './registro.interface';
export class EspecialistaForm {
  public fechaDeNacimiento: string;
  public nombre: string;
  public registro: IRegistro;
  public tarjetaProfesional: string;

  constructor(
    fechaDeNacimiento: string,
    nombre: string,
    registro: IRegistro,
    tarjetaProfesional: string
  ) {
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.nombre = nombre;
    this.registro = registro;
    this.tarjetaProfesional = tarjetaProfesional;
  }
}
