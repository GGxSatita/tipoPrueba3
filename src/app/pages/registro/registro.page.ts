import { Component, OnInit } from '@angular/core';
import {ApiAuthService} from './../../services/api-auth.service'
import {FormGroup, FormControl, FormBuilder} from '@angular/forms'
import {ApiRegistroService} from './../../services/api-registro.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public formularioRegistro : FormGroup;

  constructor(
    private authservi : ApiAuthService,
    private builder : FormBuilder,
    private registroService : ApiRegistroService
  ) {
    this.formularioRegistro = builder.group({
      firstName : [''],
      lastName : [''],
      age : [0],
      userName : [''],
      password : [''],
      birthDate : [''],
      gender : ['']
    })
  }

  ngOnInit() {
  }

  public async registrar(){
    const formularioValido = await this.formularioRegistro.valid;
    if(!formularioValido){
      return
    }
    this.registroService.registraUser({
      firstName: this.formularioRegistro.value.firstName,
      lastName: this.formularioRegistro.value.lastName,
      age: this.formularioRegistro.value.age,
      userName: this.formularioRegistro.value.userName,
      password: this.formularioRegistro.value.password,
      birthDate: this.formularioRegistro.value.birthDate,
      gender: this.formularioRegistro.value.gender
    });

  }
}
