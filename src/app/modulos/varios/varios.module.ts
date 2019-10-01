import { NgModule } from '@angular/core';
import { VariosRoutingModule } from './varios-routing.module';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { VariosComponent } from './varios.component';

import { NebularModule } from '../../nebular.module';



@NgModule({
    imports: [
        VariosRoutingModule,        
        NebularModule                    
    ],
    declarations: [
        VariosComponent, 
        NoEncontradoComponent
    ]
})
export class VariosModule { }
