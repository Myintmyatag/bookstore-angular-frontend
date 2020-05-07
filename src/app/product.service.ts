import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {}


  private url:String="http://localhost:9000/book/";

  public getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url + 'books');
  }

  public getProduct(id): Observable<Product>{
    return this.httpClient.get<Product>(this.url + id);
  }
}
