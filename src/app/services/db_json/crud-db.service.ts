import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Iproduct } from '../../interfaces/product';



@Injectable({
  providedIn: 'root'
})
export class CrudDbService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private httpCliente: HttpClient) { }

  getProducts() {
    return( 
      // console.log(this.httpCliente.get<Iproduct[]>(this.apiUrl))
      this.httpCliente.get<Iproduct[]>(this.apiUrl)
      
    )
  }

  getProduct(id: number) {
    return this.httpCliente.get<Iproduct>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: Iproduct) {
    return this.httpCliente.post<Iproduct>(this.apiUrl, product);
  }

  updateProduct(product: Iproduct) {
    return this.httpCliente.put<Iproduct>(
      `${this.apiUrl}/${product.id}`,
       product

    );

  }

  deleteProduct(id: number) {
    return this.httpCliente.delete<Iproduct>(`${this.apiUrl}/${id}`);
  }


}
