import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-frm-validacion',
  templateUrl: './frm-validacion.component.html'
 
})
export class FrmValidacionComponent {
  @Input() mensaje: string;
  @Input() campo: string;
  @Input() form: FormGroup;
  

  esValido() {
    return !this.form.get(this.campo).valid && this.form.get(this.campo).touched;
  }  
}
