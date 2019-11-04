import { NgModule } from '@angular/core';
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ListaComponent } from './lista/lista.component';
import { ProveedoresComponent } from './proveedores.component';
import { NebularModule } from '../../nebular.module';
import { GestionComponent } from './gestion/gestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VariosModule } from '../varios/varios.module';
import { GenericoModule } from '../generico/generico.module';





@NgModule({

  imports: [
    ProveedoresRoutingModule,
    NebularModule,
    FormsModule,
    ReactiveFormsModule,
    VariosModule,
    GenericoModule
  ],
  declarations: [ProveedoresComponent, GestionComponent, ListaComponent]
})
export class ProveedoresModule { }
