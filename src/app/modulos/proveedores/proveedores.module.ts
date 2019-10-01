import { NgModule } from '@angular/core';
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ListaComponent } from './lista/lista.component';
import { ProveedoresComponent } from './proveedores.component';
import { NebularModule } from '../../nebular.module';


@NgModule({

  imports: [   
  ProveedoresRoutingModule,
    NebularModule
  ],
  declarations: [ProveedoresComponent,NuevoComponent, ListaComponent]
})
export class ProveedoresModule { }
