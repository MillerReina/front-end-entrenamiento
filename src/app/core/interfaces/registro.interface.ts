export interface IRegistro {
  fechaRegistro: string;
  idRegistro: number;
}

export class RegistroForm {
  public fechaRegistro: Date;

  constructor(fechaRegistro: Date) {
    this.fechaRegistro = fechaRegistro;
  }
}
