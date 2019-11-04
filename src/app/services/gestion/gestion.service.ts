import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../../models/proveedor';
import { Respuesta } from '../../models/generico/respuesta';
import { map } from 'rxjs/operators';
import { AlertaService } from '../generico/alerta.service';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  private apiUrl: string;
  constructor(private http: HttpClient,
              private alerta: AlertaService) {
    this.apiUrl = environment.apiUrl
  }

  guardarProveedor(proveedor: Proveedor) {
    return this.http.post(`${this.apiUrl}/Proveedor`, proveedor)
      .pipe(map((res: Respuesta) => {
        if (res.exito)
          this.alerta.correcto(res.mensaje)
        else
          this.alerta.atencion(res.mensaje)
        return res;
      }));
  }
  listarProveedores(){
    return this.http.get(`${this.apiUrl}/Proveedor`);  
  }
}
