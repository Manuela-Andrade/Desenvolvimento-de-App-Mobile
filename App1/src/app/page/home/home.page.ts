import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  image = "https://aberturasimples.com.br/wp-content/uploads/2018/02/abrir-um-hortifruti.jpg";
  
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get<Product[]>('http://localhost:3000/listaCompras').subscribe(results => this.products = results);
  }

}
