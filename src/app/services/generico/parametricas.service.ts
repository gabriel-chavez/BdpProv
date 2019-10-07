import { Injectable } from '@angular/core';
import { Parametrica } from '../../models/generico/parametrica';
import { Observable, of } from 'rxjs';

import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ParametricasService {

  private tipoDocumentoCache:Parametrica[];
  private tipoPersonaCache:Parametrica[];
  private tipoServicioCache:Parametrica[];


  constructor(private http:HttpClient) { 
    this.tipoDocumentoCache=[{Id:1,Descripcion:"Ci"},{Id:1,Descripcion:"Nit"}];
    this.tipoPersonaCache=[{Id:1,Descripcion:"Natural"},{Id:1,Descripcion:"Juridica"},{Id:1,Descripcion:"Funcionario"}];
    this.tipoServicioCache=[{Id:1,Descripcion:"Telefonia e Internet"},{Id:1,Descripcion:"Diversos"},{Id:1,Descripcion:"Material Papeleria"}];
  }

  obtenerParTipoDocumento() {
    if (this.tipoDocumentoCache) {      
      return Observable.of(this.tipoDocumentoCache);
    } else {           
      // return this.http.get(...)
      //       .map(res => res.json())
      //       .do((data) => {
      //         this.tipoDocumento = data;
      //       });
    }
  }
  obtenerParTipoPersona() {
    if (this.tipoPersonaCache) {      
      return Observable.of(this.tipoPersonaCache);
    } else {           
      // return this.http.get(...)
      //       .map(res => res.json())
      //       .do((data) => {
      //         this.tipoDocumento = data;
      //       });
    }
  }
  obtenerParTipoServicio() {
    if (this.tipoPersonaCache) {      
      return Observable.of(this.tipoServicioCache);
    } else {           
      // return this.http.get(...)
      //       .map(res => res.json())
      //       .do((data) => {
      //         this.tipoDocumento = data;
      //       });
    }
  }

}
