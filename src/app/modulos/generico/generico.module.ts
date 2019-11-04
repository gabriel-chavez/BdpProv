import { NgModule } from '@angular/core';


import { GenericoRoutingModule } from './generico-routing.module';
import { CustomTableComponent, ButtonCustomComponent } from './custom-table/custom-table.component';
import { NebularModule } from '../../nebular.module';


@NgModule({
  declarations: [CustomTableComponent,ButtonCustomComponent],
  imports: [
    GenericoRoutingModule,
    NebularModule
  ],
  exports:[CustomTableComponent],
  entryComponents:[ButtonCustomComponent]
})
export class GenericoModule { }
