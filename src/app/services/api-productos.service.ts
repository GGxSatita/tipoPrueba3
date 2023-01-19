import { Injectable } from '@angular/core';
import {ApiAuthService} from './api-auth.service'
import {HttpClient} from '@angular/common/http'

import { Productos, ProductResponse } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  public datosProductos : ProductResponse | null = null;
  public URL_PRODUCT : string = 'siguiente https://dummyjson.com/auth/products?skip=0'



  constructor(
    private apiAuth : ApiAuthService,
    private cliente : HttpClient

  ) { }

  public conseguirProductos({title}:Productos){
    this.cliente.get<ProductResponse>(this.URL_PRODUCT,
      {
      headers: {
        'Content-Type': 'application/json',

      }
    }).subscribe((datosInternet)=>{
      this.datosProductos = datosInternet
    })
  }


}
