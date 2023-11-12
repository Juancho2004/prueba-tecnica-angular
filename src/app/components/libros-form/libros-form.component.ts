import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/model/books';
import { Employee } from 'src/app/model/employee';
import { AutoresService } from 'src/app/service/autores.service';
import { LibrosService } from 'src/app/service/libros.service';

@Component({
  selector: 'app-libros-form',
  templateUrl: './libros-form.component.html',
  styleUrls: ['./libros-form.component.css']
})
export class LibrosFormComponent implements OnInit {

  libro: Books = new Books()
  titulo: string = 'Insert your book'
  employeeData : Employee[] = [];

  constructor(
    private libroServices: LibrosService,
    private autoresServices: AutoresService,
    private router: Router){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.libroServices.getAutores().subscribe( data => {
      this.employeeData = data;
      console.log('Autores', this.employeeData)
    })
  }

  create():void{
    console.log(this.libro)
    this.libroServices.createBook(this.libro).subscribe(
      res => this.router.navigate(['/autores'])
      );
  }

}
