import { NgModule } from '@angular/core';
import { VariosRoutingModule } from './varios-routing.module';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { VariosComponent } from './varios.component';

import { NebularModule } from '../../nebular.module';
import { FrmValidacionComponent } from './frm-validacion/frm-validacion.component';



@NgModule({
    imports: [
        VariosRoutingModule,        
        NebularModule                    
    ],
    exports:[FrmValidacionComponent],
    declarations: [
        VariosComponent, 
        NoEncontradoComponent, FrmValidacionComponent
    ]
})
export class VariosModule { }
