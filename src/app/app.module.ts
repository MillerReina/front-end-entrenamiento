import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './principal/principal.component';
import { AngularMaterialModule } from './shared/material/angular-material.module';
import { EjercicioPageComponent } from './ejercicio-page/ejercicio-page.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplicationModule } from './components/application.module';
import { EspecialistaComponent } from './especialista/especialista.component';

@NgModule({
  declarations: [AppComponent, PrincipalComponent, EjercicioPageComponent, EspecialistaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicationModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '10px',
      primaryColour: '#D5D5D5',
      secondaryColour: '#D5D5D5',
      tertiaryColour: '#D5D5D5',
      fullScreenBackdrop: true,
    }),
  ],
  providers: [],
  exports: [AngularMaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
