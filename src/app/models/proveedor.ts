export class Proveedor {
    Nombre:string;
    RazonSocial:string;
    NitCi:string;
    TParTipoDocumentoFk:number;
    tparTipoDocumentoDescripcion:string;
    Email:string;
    Casilla:number;
    TParTipoPersonaFk:number;
    tparTipoPersonaDescripcion:string;
    Direccion:string;
    Telefono1:string;
    Telefono2:string;
    Lugar:string;
    TParTipoServicioFk:number;
    tparTipoServicioDescripcion:string;
    Relacion:string;
    public constructor(init?: Partial<Proveedor>) {
       // let _proveedor:Proveedor=JSON.parse(JSON.stringify(init));
        Object.assign(this, init);
    }
}
