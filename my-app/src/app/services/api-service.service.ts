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
  
  getPastaID(id?:number): Observable<Pasta>{
    const url = `${BASE_API}pastas/${id}`;
    return this.http.get<Pasta>(url,httpOptions)
  }

  listarItens(idPasta?: number): Observable<Item[]>{
    return this.http.get<Item[]>(`${BASE_API}itens/${idPasta}`,httpOptions)
  }

  inserir(pasta: Pasta): Observable<Pasta> {
    return this.http.post(BASE_API, pasta, httpOptions)
  }

  editarPasta(idPasta?:number, pasta?:Pasta): Observable<Pasta>{
    const url = `${BASE_API}putPasta/${idPasta}`
    return this.http.put<Pasta>(url,pasta,httpOptions)
  }

  deletar(id?: number): Observable<any> {
    return this.http.delete(`${BASE_API}${id}`, httpOptions);  
  }
  
}
