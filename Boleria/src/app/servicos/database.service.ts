import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Receitas } from '../model/receita.model';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  
  readonly API = 'http://localhost:3000/lista/'

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

  atualizarReceita(item: Receitas, id: any){
    return this.http.put(this.API + id, JSON.stringify(item), this.HttpOptions).subscribe();
  }
  
  }
  



