import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../classes/item';

const BASE_API = "http://localhost:3030/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private http: HttpClient) {}
  
  listar(): Observable<Item[]>{
    return this.http.get<Item[]>(BASE_API)
  }

  inserir(item: Item): Observable<Item> {
    return this.http.post(BASE_API, item, httpOptions)
  }

  deletar(id?: number): Observable<any> {
    return this.http.delete(`${BASE_API}${id}`, httpOptions);  // Passando o id na URL
  }
  
}
