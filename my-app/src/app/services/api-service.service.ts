import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pasta } from '../classes/pasta';
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
  
  listarPastas(): Observable<Pasta[]>{
    return this.http.get<Pasta[]>(BASE_API)
  }

  listarItens(idPasta?: number): Observable<Item[]>{
    return this.http.get<Item[]>(`${BASE_API}${idPasta}`,httpOptions)
  }

  inserir(pasta: Pasta): Observable<Pasta> {
    return this.http.post(BASE_API, pasta, httpOptions)
  }

  deletar(id?: number): Observable<any> {
    return this.http.delete(`${BASE_API}${id}`, httpOptions);  // Passando o id na URL
  }
  
}
