import { Injectable } from '@angular/core';
import { Parametrica } from '../../models/generico/parametrica';
import { Observable, of } from 'rxjs';

import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ParametricasService {

  private apiUrl: string;
  private tipoDocumentoCache: Array<Parametrica>;
  private tipoPersonaCache: Array<Parametrica>;
  private tipoServicioCache: Array<Parametrica>;


  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl
    
  }

  obtenerParTipoDocumento() {
    if (this.tipoDocumentoCache) {
      return Observable.of(this.tipoDocumentoCache);
    } else {
      return this.http.get(`${this.apiUrl}/parametricas/ParTipoDocumento`)
        .pipe(
          map((data: Array<Parametrica>) => {
            this.tipoDocumentoCache = data;
            return this.tipoDocumentoCache
          })
        );

    }
  }
  obtenerParTipoPersona() {
    if (this.tipoPersonaCache) {
      return Observable.of(this.tipoPersonaCache);
    } else {
      return this.http.get(`${this.apiUrl}/parametricas/ParTipoPersona`)
        .pipe(
          map((data: Array<Parametrica>) => {
            this.tipoPersonaCache = data;
            return this.tipoPersonaCache
          })
        );
    }
  }
  obtenerParTipoServicio() {
    if (this.tipoServicioCache) {
      return Observable.of(this.tipoServicioCache);
    } else {
      return this.http.get(`${this.apiUrl}/parametricas/ParTipoServicio`)
        .pipe(
          map((data: Array<Parametrica>) => {
            this.tipoServicioCache = data;
            return this.tipoServicioCache
          })
        );
    }
  }

}
