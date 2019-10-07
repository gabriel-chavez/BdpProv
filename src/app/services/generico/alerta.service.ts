import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import 'rxjs/add/observable/of';

import swal from 'sweetalert2'
import { NbToastrService } from '@nebular/theme';

@Injectable({
    providedIn: 'root'
})
export class AlertaService {
    private index: number = 0;
    constructor(private toastrService: NbToastrService) { }
    atencion(mensaje: string) {
        swal.fire("Atención", mensaje, 'warning');
    }
    error(mensaje: string) {
        swal.fire("Error", mensaje, 'error');
    }
    confirmar(mensaje: string, funcion: any) {
        swal.fire({
            title: '',
            text: mensaje,
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonClass: 'default',
            confirmButtonText: 'Si',
            cancelButtonText: "No realizar cambios"
        }).then((result) => {
            if (result.value) {
                funcion();
            }
        })
    }
    correcto(mensaje: string) {
        this.index += 1;
        this.toastrService.show(
            mensaje,
            'Correcto',
            { status: 'success' });

    }
    exito(mensaje: string) {
        swal.fire("Correcto", mensaje, 'success');
    }

}