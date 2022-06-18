import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EjercicioForm } from '../core/interfaces/ejercicio.interface';
import {
  ITipoEjercicios,
  ITipoEjercicio,
} from '../core/interfaces/tipo-ejercicio.interface';

@Injectable({
  providedIn: 'root',
})
export class EjerciciosService {
  private baseURL!: string;

  constructor(private http: HttpClient) {
    this.baseURL = `${environment.localhost}`;
  }

  getTiposDeEjercicio(): Observable<ITipoEjercicios> {
    return this.http.get<ITipoEjercicios>(`${this.baseURL}/tipo-ejercicio`);
  }

  postCrearTipoEjercicio(formData: any) {
    return this.http.post<any>(`${this.baseURL}/tipo-ejercicio`, formData);
  }

  postCrearEjercicio(formData: EjercicioForm) {
    return this.http.post<any>(`${this.baseURL}/ejercicio`, formData);
  }

  getTipoDeEjercicioById(id: string) {
    return this.http.get<ITipoEjercicio>(
      `${this.baseURL}/tipo-ejercicio/${id}`
    );
  }
}
