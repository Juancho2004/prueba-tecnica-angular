import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Books } from '../model/books';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  // constructor(
  //   private http: HttpClient
  // ) { }

  // getAutores(){
  //   return this.http.get<Employee[]>('http://127.0.0.1:5000/autores')
  // }
}
