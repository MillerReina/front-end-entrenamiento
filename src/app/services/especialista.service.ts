import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroForm, IRegistro } from '../core/interfaces/registro.interface';
import { EspecialistaForm } from '../core/interfaces/especialista.interface';
import { IEspecialistas } from '../core/interfaces/all-especialistas.interface';

@Injectable({
  providedIn: 'root',
})
export class EspecialistaService {
  private baseURL!: string;

  constructor(private http: HttpClient) {
    this.baseURL = `${environment.localhost}`;
  }

  postCrearRegistro(formData: RegistroForm) {
    return this.http.post<IRegistro>(`${this.baseURL}/registro`, formData);
  }

  postCrearEspecialista(formData: EspecialistaForm) {
    return this.http.post<any>(`${this.baseURL}/especialista`, formData);
  }

  getEspecialistas() {
    return this.http.get<IEspecialistas>(`${this.baseURL}/especialista`);
  }
}
