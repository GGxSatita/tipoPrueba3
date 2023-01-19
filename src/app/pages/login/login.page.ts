import { Component, OnInit } from '@angular/core';
import {ApiAuthService} from './../../services/api-auth.service';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm : FormGroup

  constructor(
    private builder : FormBuilder,
    private servicio : ApiAuthService
  ) {
    this.loginForm = builder.group({
      username : [''],
      password : [''],
    })
  }

  ngOnInit() {
  }

  public validar(){
    const formularioValido = this.loginForm.valid;
    if(!formularioValido){
      return
    }
    this.servicio.autenticar({
      username : this.loginForm.value.username,
      password : this.loginForm.value.password
    })
  }

}
