import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';


import { NebularModule } from '../../nebular.module';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
    imports: [
        AuthRoutingModule,
        NebularModule,
        NbLayoutModule

    ],
    declarations: [
        AuthComponent,
        LoginComponent,
    ],

})
export class AuthModule { }