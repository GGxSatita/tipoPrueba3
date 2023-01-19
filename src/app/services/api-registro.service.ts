import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { NuevoUserResponse, NuevoUser } from '../models/nuevoUser';

@Injectable({
  providedIn: 'root'
})
export class ApiRegistroService {

  public URL_REGISTRO : string = 'https://dummyjson.com/users/add'
  public datosRegistro : NuevoUserResponse | null = null;

  constructor(
    private cliente : HttpClient,

  ) { }

  public registraUser({age,birthDate,firstName,gender,lastName,password,userName}:NuevoUser){
    this.cliente.post<NuevoUserResponse>(this.URL_REGISTRO,{
      firstName,
      lastName,
      age,
      userName,
      password,
      birthDate,
      gender
    },{
      headers:{
        'Content-Type': 'application/json'
      }
    }).subscribe((datosInternet)=>{
      this.datosRegistro = datosInternet
    })
  }
}
