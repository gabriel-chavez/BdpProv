import { NgModule } from '@angular/core';
import { ModulosComponent } from './modulos.component';
import { ModulosRoutingModule } from './modulos-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { NbMenuModule } from '@nebular/theme';
import { VariosModule } from './varios/varios.module';


@NgModule({

  imports: [
    ModulosRoutingModule,
    ThemeModule,
    NbMenuModule,
    VariosModule,
  ],
  declarations: [
    ModulosComponent
  ]
})
export class ModulosModule { }
