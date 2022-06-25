import { IRegistro } from './registro.interface';
export class EspecialistaForm {
  public idEspecialista: number | null;
  public fechaDeNacimiento: string;
  public nombre: string;
  public registro: IRegistro;
  public tarjetaProfesional: string;

  constructor(
    idEspecialista: number | null,
    fechaDeNacimiento: string,
    nombre: string,
    registro: IRegistro,
    tarjetaProfesional: string
  ) {
    this.idEspecialista = idEspecialista;
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.nombre = nombre;
    this.registro = registro;
    this.tarjetaProfesional = tarjetaProfesional;
  }
}
