import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  constructor() { }

  public modalEliminar: boolean = false;
  public modalEditar: boolean = false;
  public modalNueva: boolean = false;
  public empresaModel: Empresa;
  public empresas = []
  public CODEMPRESA;

  ngOnInit() {
    this.empresaModel = new Empresa(null, null, null, null, null);
  }

  abrirModalEliminar(id) {
    this.CODEMPRESA = id;
    this.modalEliminar = true;
  }

  cerrarModalEliminarAcceso() {
    this.modalEliminar = false;
    this.limpiarModelo();
  }

  abrirModalEditar(id) {
    this.CODEMPRESA = id;
    this.modalEditar = true;
  }

  cerrarModalEditarAcceso() {
    this.modalEditar = false
    this.limpiarModelo()
  }

  abrirModalNuevaEmpresa() {
    this.modalNueva = true;
  }
  cerrarModalNuevaEmpresa() {
    this.modalNueva = false;
    this.limpiarModelo();
  }

  limpiarModelo() {
    this.empresaModel.CODEMPRESA = null;
    this.empresaModel.DIRECCION = null;
    this.empresaModel.FECHAFUNDACION = null;
    this.empresaModel.NIT = null;
    this.empresaModel.NOMBRE = null;
    this.CODEMPRESA = null;
  }

  updateEmpresa() {
    this.empresas[this.CODEMPRESA].NOMBRE = this.empresaModel.NOMBRE;
    this.empresas[this.CODEMPRESA].DIRECCION = this.empresaModel.DIRECCION;
    this.empresas[this.CODEMPRESA].FECHAFUNDACION = this.empresaModel.FECHAFUNDACION;
    this.empresas[this.CODEMPRESA].NIT = this.empresaModel.NIT;
    this.modalEditar = false;
  }

  createEmpresa() {
    var UID = "uid" + Math.floor(Math.random() * 999);
    this.empresaModel.CODEMPRESA = UID.toString();;

    this.empresas.push(this.empresaModel);
    this.modalNueva = false;
    console.log(this.empresas);
  }

}
