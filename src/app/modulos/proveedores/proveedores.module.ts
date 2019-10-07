import { NgModule } from '@angular/core';
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ListaComponent } from './lista/lista.component';
import { ProveedoresComponent } from './proveedores.component';
import { NebularModule } from '../../nebular.module';
import { GestionComponent } from './gestion/gestion.component';


@NgModule({

  imports: [   
  ProveedoresRoutingModule,
    NebularModule
  ],
  declarations: [ProveedoresComponent,GestionComponent, ListaComponent, ]
})
export class ProveedoresModule { }
