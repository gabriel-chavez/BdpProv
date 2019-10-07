import { Component, TemplateRef } from '@angular/core';
import { Parametrica } from '../../../models/generico/parametrica';
import { LocalDataSource } from 'ng2-smart-table';
import { ParametricasService } from '../../../services/generico/parametricas.service';
import { SmartTableData } from '../../../@core/data/smart-table';
import { NbDialogService } from '@nebular/theme';

import { ViewChild } from '@angular/core';

import { AlertaService } from '../../../services/generico/alerta.service';

@Component({
  selector: 'ngx-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {


  @ViewChild('dialog', { static: false }) modalProveedor;

  tParTipoDocumento: Array<Parametrica> = [];
  tParTipoServicio: Array<Parametrica> = [];
  tParTipoPersona: Array<Parametrica> = [];
  tituloModal: string;
  /****/
  settings = {
    mode: 'external',
    actions: {
      add: false,
      position: "right",
      columnTitle: "Acciones"
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
  constructor(
    private _parametricasService: ParametricasService,
    private service: SmartTableData,
    private dialogService: NbDialogService,
    private alerta: AlertaService) {

    this.obtenerParametricas();
    const data = this.service.getData();
    this.source.load(data);

  }
  onDeleteConfirm(event): void {

    this.alerta.confirmar("No se pudo guardar el registro solicitado", () => {


      this.source.remove(event.data)
      this.alerta.correcto('El registro fue eliminado correctamente');
    })

  }

  private obtenerParametricas() {
    //Tipo Documento
    this._parametricasService.obtenerParTipoDocumento()
      .subscribe((data: Array<Parametrica>) => {
        this.tParTipoDocumento = data;
      });
    //Tipo Persona
    this._parametricasService.obtenerParTipoPersona()
      .subscribe((data: Array<Parametrica>) => {
        this.tParTipoPersona = data;
      });
    //Tipo Persona
    this._parametricasService.obtenerParTipoServicio()
      .subscribe((data: Array<Parametrica>) => {
        this.tParTipoServicio = data;
      });
  }
  abrirModal(dialog: TemplateRef<any>, tituloModal: string) {
    this.tituloModal = tituloModal;
    this.dialogService.open(
      dialog,
      { closeOnEsc: true, closeOnBackdropClick: false, hasScroll: false });
  }
  onEditarRegistro(event) {
    console.log(event._dataSet.selectedRow)
    this.abrirModal(this.modalProveedor, 'Editar proveedor')
  }
  guardarCambiosProveedor() {

  }
}
