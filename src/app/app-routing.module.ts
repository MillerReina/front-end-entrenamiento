import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { EjercicioPageComponent } from './ejercicio-page/ejercicio-page.component';
import { EspecialistaComponent } from './especialista/especialista.component';

const routes: Routes = [
  { path: 'inicio', component: PrincipalComponent },
  { path: 'ejercicio', component: EjercicioPageComponent },
  { path: 'especialistas', component: EspecialistaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
