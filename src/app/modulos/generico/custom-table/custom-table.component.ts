import { Component, OnInit, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-custom-table',
  template: `
   <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
   <template #messagecontainer>
     </template>`,
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() columnas: any;
  @Input() source: any;


  public settings: Object;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    //console.log(this.settings["columns"].push(this.buttonsCustom()))
    this.columnas.button = this.buttonsCustom();
    this.settings = {
      actions: false,
      columns: this.columnas,
    };
    // this.settings.columns.push(this.buttonsCustom());
    console.log(this.settings)
  }
  
  private buttonsCustom(): object {
    let buttonCustom: ButtonCustomComponent = new ButtonCustomComponent;


    return {
      title: 'Opciones',
      type: 'custom',
      filter: false,
      renderComponent: buttonCustom,
      onComponentInitFunction(instance) {
        instance.save.subscribe(row => {
          alert(`${row.nroComprobante} saved!`)

        });
      }
    }
  }


}
/*****COMPONENTE HIJO******/
@Component({
  selector: 'button-custom',
  template: `   
    <button nbButton size="tiny" [nbContextMenu]="_opciones" outline status="primary" nbContextMenuTrigger="click">
        Opciones      
    </button>
    <button nbButton size="tiny" (click)="onClick()">
    prueba
    </button>
  `,
})
export class ButtonCustomComponent implements OnInit {
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Input() opciones: any[];
  @Input() _opciones: any[] =
    [
      { title: 'Renovar SOAT', name: 'renovar' },
      { title: 'Comprobante SOAT', name: 'comprobante' },
    ];
  onClick() {
    console.log(this.rowData);
    this.save.emit(this.rowData);
  }
  ngOnInit() {
    console.log(this.rowData);
  }
}
