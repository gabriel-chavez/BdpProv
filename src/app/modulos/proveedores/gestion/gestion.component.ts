import { Component, TemplateRef } from '@angular/core';
import { Parametrica } from '../../../models/generico/parametrica';
import { LocalDataSource } from 'ng2-smart-table';
import { ParametricasService } from '../../../services/generico/parametricas.service';
import { SmartTableData } from '../../../@core/data/smart-table';
import { NbDialogService, NbDialogRef } from '@nebular/theme';

import { ViewChild } from '@angular/core';

import { AlertaService } from '../../../services/generico/alerta.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericoService } from '../../../services/generico/generico.service';
import { GestionService } from '../../../services/gestion/gestion.service';
import { Proveedor } from '../../../models/proveedor';
import { Respuesta } from '../../../models/generico/respuesta';

@Component({
  selector: 'ngx-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {


  @ViewChild('dialog', { static: false }) modalProveedor;

  tParTipoDocumento: Parametrica[] = [];
  tParTipoServicio: Parametrica[] = [];
  tParTipoPersona: Parametrica[] = [];
  tituloModal: string;
  proveedores:Proveedor[]=[];
  /****/
  columnas= {
    nombre: {
      title: 'Nombre'
    },
    razonSocial: {
      title: 'Razon Social'
    },
    nitCi: {
      title: 'Nit/Ci'
    },
    tparTipoDocumentoDescripcion: {
      title: 'Tipo Documento',
      filter: false
    },
    email: {
      title: 'Correo Electronico',
      filter: false
    },

    telefono1: {
      title: 'Telefono',
      filter: false
    },

  };
  
  source: LocalDataSource = new LocalDataSource();
  /****/
  frmProveedor: FormGroup;

  private dialogRef: NbDialogRef<any>;

  constructor(
    private _parametricasService: ParametricasService,
    private service: SmartTableData,
    private dialogService: NbDialogService,
    private alerta: AlertaService,
    private formBuilder: FormBuilder,
    private generico: GenericoService,
    private gestionService: GestionService
  ) {

    this.obtenerParametricas();   
    this.listarProveedores();
    this.crearFormulario();


  }
  onDeleteConfirm(event): void {

    this.alerta.confirmar("Esta seguro de eliminar el proveedor?", () => {
      this.source.remove(event.data)
      this.alerta.correcto('El registro fue eliminado correctamente');
    })

  }
  private crearFormulario() {
    this.frmProveedor = this.formBuilder.group({
      Nombre: ['', Validators.required],
      RazonSocial: ['', Validators.required],
      NitCi: ['', Validators.required],
      TParTipoDocumentoFk: ['', Validators.required],
      Email: ['', Validators.email],
      Casilla: [null],
      TParTipoPersonaFk: ['', Validators.required],
      Direccion: ['', [Validators.required, Validators.minLength(5)]],
      Telefono1: ['', Validators.required],
      Telefono2: [''],
      Lugar: ['', Validators.required],
      TParTipoServicioFk: ['', Validators.required],
      Relacion: ['', Validators.required],
    })
  }
  private listarProveedores(){
    this.gestionService.listarProveedores()
    .subscribe((data: Respuesta) => {
      console.log(data)
      this.proveedores = JSON.parse(data.respuestaJson);
      this.source.load(this.proveedores);
    });
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
    this.dialogRef = this.dialogService.open(
      dialog,
      { closeOnEsc: true, closeOnBackdropClick: false, hasScroll: false });
  }
  onEditarRegistro(event) {
    console.log(event._dataSet.selectedRow)
    this.abrirModal(this.modalProveedor, 'Editar proveedor')
  }
  guardarCambiosProveedor() {
    this.generico.frmValidarTodo(this.frmProveedor);
    if (this.frmProveedor.invalid)
      return false;
    this.alerta.confirmar("Esta seguro de guardar el proveedor?", () => {
      let proveedor = new Proveedor(this.frmProveedor.value)
      proveedor.Casilla = this.frmProveedor.controls.Casilla.value == "" ? null : Number(this.frmProveedor.controls.Casilla.value);
      this.gestionService.guardarProveedor(proveedor).subscribe((resp: Respuesta) => {
        console.log(resp)
        if (resp.exito) {
          this.frmProveedor.reset();
          this.dialogRef.close();
          this.listarProveedores();
        }

      });
    })

  }
  cerrarModal(dialog: any) {
    console.log("cerrar Modal")
    this.frmProveedor.reset();
    dialog.close();

  }
}
