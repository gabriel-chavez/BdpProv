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
