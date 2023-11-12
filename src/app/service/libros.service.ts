import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from '../model/books';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private url: string = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  getAutores(){
    return this.http.get<Employee[]>(`${this.url}/autores`)
  }

  getAutor(id: number): Observable<Employee> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<Employee>(this.url + '/autores/' + id, { headers: headers });
  }

  getLibros(index: number){
    return this.http.get<Books[]>(`${this.url}/libros/autor/${index}`)
  }

  createAutor(book: Books):Observable<Employee>{
    console.log(JSON.stringify(book))
    return this.http.post<Employee>(`${this.url}/autores`,  book)

  }

  createBook(book: Books):Observable<Books>{
    console.log(JSON.stringify(book))
    return this.http.post<Books>(`${this.url}/libros`,  book)

  }

  updateAutores(id: number, autor: Employee){
    const data = { nombre: autor.nombre, nacionalidad: autor.nacionalidad };
    console.log(JSON.stringify(autor))
    return this.http.put<Employee>(`${this.url}/autores/${id}`, JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateBook(id: number, title: string): Observable<Books> {
    const data = { title: title };
    console.log(JSON.stringify(data))
    return this.http.put<Books>(`${this.url}/libros/${id}`, JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteAutores(id:number):Observable<Employee>{
    return this.http.delete<Employee>(`${this.url}/autores/${id}`)
  }

  deletelibros(id:number):Observable<Employee>{
    return this.http.delete<Employee>(`${this.url}/libros/${id}`)
  }
}
