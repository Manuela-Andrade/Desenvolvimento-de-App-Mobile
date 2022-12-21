import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Receitas } from '../model/receita.model';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  update(value: any, routeId: null) {
    throw new Error('Method not implemented.');
  }

  readonly API = 'http://localhost:3000/lista/'

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getReceita(){
    return this.http.get<Receitas[]>(this.API);

  }

  getOneReceita(id: number){
    return this.http.get<Receitas>(this.API + id);
  }

  postReceita(item: any){
    return this.http.post(this.API, JSON.stringify(item), this.HttpOptions).subscribe();
  }

  delReceita(id: number){
    return this.http.delete(this.API + id).subscribe();
  }

  statusItem(item: Receitas){
    return this.http.put(this.API + item.id, JSON.stringify(item), this.HttpOptions).subscribe();
  }

  atualizarItem(item: Receitas){
    return this.http.put(this.API + item.receita, item.ingredientes).subscribe();
  }
  
  }
  



