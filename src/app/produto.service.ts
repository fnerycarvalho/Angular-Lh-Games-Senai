import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3000/produtos"

  constructor(private _httpClient: HttpClient) { }

  getProdutos(): Observable<any>{
    return this._httpClient.get(this.url)
  }
  cadastrarProduto(produto: any): Observable<any>{
    return this._httpClient.post(this.url, produto)
  }
}
