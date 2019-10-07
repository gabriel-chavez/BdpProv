import { Component, OnInit } from '@angular/core';
import { Parametrica } from '../../../models/generico/parametrica';
import { ParametricasService } from '../../../services/generico/parametricas.service';

import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  TParTipoDocumento: Array<Parametrica> = [];
  TParTipoServicio: Array<Parametrica> = [];
  TParTipoPersona: Array<Parametrica> = [];
  /****/
  settings = {
    actions:{
      add:false
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  /****/
  constructor(private _parametricasService: ParametricasService,private service: SmartTableData) {
    this.obtenerParametricas();

    const data = this.service.getData();
    this.source.load(data);
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {

  }
  private obtenerParametricas() {
    //Tipo Documento
    this._parametricasService.obtenerParTipoDocumento()
      .subscribe((data: Array<Parametrica>) => {
        this.TParTipoDocumento = data;
      });
    //Tipo Persona
    this._parametricasService.obtenerParTipoPersona()
      .subscribe((data: Array<Parametrica>) => {
        this.TParTipoPersona = data;
      });
    //Tipo Persona
    this._parametricasService.obtenerParTipoServicio()
      .subscribe((data: Array<Parametrica>) => {
        this.TParTipoServicio = data;
      });
  }

}
