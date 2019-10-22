import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl
  }

  guardarProveedor(proveedor: Proveedor) {
    console.log(proveedor)
    this.http.post(`${this.apiUrl}/Proveedor`, proveedor)
      .subscribe(res => console.log('Done'));
  }
}
