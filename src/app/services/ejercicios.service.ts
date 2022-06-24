import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { EjercicioForm } from '../core/interfaces/ejercicio.interface';
import { IEjercicios } from '../core/interfaces/all-ejercicios.interface';
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

  /* EJERCICIO */

  getTodosEjercicios() {
    return this.http.get<IEjercicios>(`${this.baseURL}/ejercicio`).pipe(
      tap((res) => {
        for (let i = 0; i < res.list.length; i++) {
          const element = res.list[i];
          element.idEjercicio = i + 1;
        }
      })
    );
  }

  postCrearEjercicio(formData: EjercicioForm) {
    return this.http.post<any>(`${this.baseURL}/ejercicio`, formData);
  }

  putActualizarEjercicio(idEjercicio: number, formData: EjercicioForm) {
    console.log(formData);
    return this.http.put<any>(
      `${this.baseURL}/ejercicio/${idEjercicio.toString()}`,
      formData
    );
  }

  deleteEjercicio(idEjercicio: number) {
    console.log(idEjercicio);

    return this.http.delete<any>(
      `${this.baseURL}/ejercicio/remover/${idEjercicio}`
    );
  }

  /* TIPO DE EJERCICIO */

  getTiposDeEjercicio(): Observable<ITipoEjercicios> {
    return this.http.get<ITipoEjercicios>(`${this.baseURL}/tipo-ejercicio`);
  }

  postCrearTipoEjercicio(formData: any) {
    return this.http.post<any>(`${this.baseURL}/tipo-ejercicio`, formData);
  }

  getTipoDeEjercicioById(id: string) {
    return this.http.get<ITipoEjercicio>(
      `${this.baseURL}/tipo-ejercicio/${id}`
    );
  }
}
