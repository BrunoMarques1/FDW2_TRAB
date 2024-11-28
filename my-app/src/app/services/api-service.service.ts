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
  
  getPastas(): Observable<Pasta[]>{
    const url = `${BASE_API}getPastas`
    return this.http.get<Pasta[]>(url)
  }
  getPastaByID(id?:number): Observable<Pasta>{
    const url = `${BASE_API}getPasta/${id}`;
    return this.http.get<Pasta>(url,httpOptions)
  }

  getItensByPastaID(idPasta?: number): Observable<Item[]>{
    const url = `${BASE_API}getItensByPasta/${idPasta}`
    return this.http.get<Item[]>(url,httpOptions)
  }
  getItemByID(item_id?:number): Observable<Item>{
    const url = `${BASE_API}getItem/${item_id}`;
    return this.http.get<Item>(url,httpOptions)
  }
  getItens(id?: number): Observable<Pasta[]>{
    const url = `${BASE_API}getItens`
    return this.http.get<Pasta[]>(url)
  }

  

  postPasta(pasta: Pasta): Observable<Pasta> {
    const url = `${BASE_API}postPasta`
    return this.http.post(url,pasta,httpOptions)
  }
  postItem(item: Item): Observable<Item> {
    const url = `${BASE_API}postItem`
    return this.http.post(url,item,httpOptions)
  }



  editarPasta(idPasta?:number, pasta?:Pasta): Observable<Pasta>{
    const url = `${BASE_API}putPasta/${idPasta}`
    return this.http.put<Pasta>(url,pasta,httpOptions)
  }
  editarItem(idItem?:number, item?:Item): Observable<Item>{
    const url = `${BASE_API}putItem/${idItem}`
    return this.http.put<Item>(url,item,httpOptions)
  }

  deletarPasta(id?: number): Observable<Pasta> {
    const url = `${BASE_API}pasta/${id}`
    return this.http.delete(url, httpOptions);  
  }
  deletarItem(id?: number): Observable<Item> {
    const url = `${BASE_API}item/${id}`
    return this.http.delete(url, httpOptions);  
  }
  
}
