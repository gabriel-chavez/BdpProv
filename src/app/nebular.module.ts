import { NgModule } from '@angular/core';

import {
  
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { ThemeModule } from './@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
const NEBULAR_COMPONENTS = [
  ThemeModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  Ng2SmartTableModule
]
@NgModule({
  imports: [    
    ...NEBULAR_COMPONENTS
  ],
  exports:[
    ...NEBULAR_COMPONENTS
  ]
})
export class NebularModule { }
