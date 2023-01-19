import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Auth, AuthResponse} from './../models/auth'

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  public URL_AUTH : string = 'https://dummyjson.com/auth/login'
  public datosUsuario : AuthResponse | null = null;
  constructor(
    private cliente : HttpClient
  ) { }

  public autenticar({username, password}:Auth){
    this.cliente.post<AuthResponse>(this.URL_AUTH,{
      username,
      password
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
    .subscribe((datos)=>{
      this.datosUsuario = datos;
    })
  }

  public obtenerToken(){
    this.datosUsuario?.token;
  }
}
