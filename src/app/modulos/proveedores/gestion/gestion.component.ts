import { Component, TemplateRef } from '@angular/core';
import { Parametrica } from '../../../models/generico/parametrica';
import { LocalDataSource } from 'ng2-smart-table';
import { ParametricasService } from '../../../services/generico/parametricas.service';
import { SmartTableData } from '../../../@core/data/smart-table';
import { NbDialogService } from '@nebular/theme';

import { ViewChild } from '@angular/core';

import { AlertaService } from '../../../services/generico/alerta.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericoService } from '../../../services/generico/generico.service';
import { GestionService } from '../../../services/gestion/gestion.service';

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
  
  /****/
  settings = {
    mode: 'external',
    actions: {
      add: false,
      position: "right",
      columnTitle: "Acciones",
      custom: [
        {
          name: 'Button',
          title: '<i class="nb-edit"></i> ',
        }
      ],
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
      nombre: {
        title: 'Nombre',
        type: 'string',
      },
      razonSocial: {
        title: 'Razon Social',
        type: 'string',
      },
      nitCi: {
        title: 'Nit/Ci',
        type: 'number',
      },
      tParTipoDocumentoFk: {
        title: 'Tipo Documento',
        type: 'string',
        filter:false
      },
      correoElectronico: {
        title: 'Correo Electronico',
        type: 'string',
        filter:false
      },
   
      telefono1: {
        title: 'Telefono',
        type: 'number',
        filter:false
      },
     
    },
  };
  source: LocalDataSource = new LocalDataSource();
  /****/
  frmProveedor:FormGroup;
 
  constructor(
    private _parametricasService: ParametricasService,
    private service: SmartTableData,
    private dialogService: NbDialogService,
    private alerta: AlertaService,
    private formBuilder: FormBuilder,
    private generico:GenericoService,
    private gestionService:GestionService) {

    this.obtenerParametricas();
    const data = this.service.getData();
    this.source.load(data);

    this.crearFormulario();
    

  }
  onDeleteConfirm(event): void {

    this.alerta.confirmar("Esta seguro de eliminar el proveedor?", () => {
      this.source.remove(event.data)
      this.alerta.correcto('El registro fue eliminado correctamente');
    })

  }
  private crearFormulario(){
    this.frmProveedor=this.formBuilder.group({
      Nombre:['',Validators.required],
      RazonSocial:['',Validators.required],
      NitCi:['',Validators.required],
      TParTipoDocumentoFk:['',Validators.required],
      CorreoElectronico:['',Validators.email],
      Casilla:[''],
      TParTipoPersonaFk:['',Validators.required],
      Direccion:['',[Validators.required, Validators.minLength(5)]],
      Telefono1:['',Validators.required],
      Telefono2:[''],
      Lugar:['',Validators.required],
      TParTipoServicioFk:['',Validators.required],      
      Relacion:['',Validators.required],
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
    this.generico.frmValidarTodo(this.frmProveedor);
    console.log(this.frmProveedor.value);
    this.gestionService.guardarProveedor(this.frmProveedor.value);
  }
  cerrarModal(dialog: any){
    console.log("cerrar Modal")
    this.frmProveedor.reset();
    dialog.close();
    
  }
}
