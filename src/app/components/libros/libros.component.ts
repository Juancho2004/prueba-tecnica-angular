import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Books } from 'src/app/model/books';
import { Book } from 'src/app/interfaces/book';
import { LibrosService } from 'src/app/service/libros.service';
import { ConfirmDialogComponent } from '../general/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],

})
export class LibrosComponent implements OnInit {

  books: any = '';
  selectedBook : Book = { titulo: '' };
  titulo: string = "Author's works";
  employeeBooks : Books[] = [];
  consecutivo: number = 0;
  menuActivo: number | null = null;
  libro: Books = new Books();
  // activateResumen: boolean = false;
  // isMenu1Active: boolean = false;
  // isMenuActivate2: boolean = false;


  constructor(
      private librosService: LibrosService,
      private activatedRoute: ActivatedRoute,
      private dialog: MatDialog,
    ){
    this.activatedRoute.params.subscribe(
      params=> {
        this.getLibros(params['id'])
      }
    )
  }

  ngOnInit(): void {
    this.books;
  }

  getFormatearFecha(fecha: Date):string{
    const fecha_formateada = new Date(fecha);
    const anio = fecha_formateada.getFullYear();
    const mes =  fecha_formateada.getMonth() + 1;
    const dia =  fecha_formateada.getDate();
    const mesFormateado = mes < 10 ? `0${mes}` : mes;
    const diaFormateado = dia < 10 ? `0${dia}` : dia;
    return `${diaFormateado}/${mesFormateado}/${anio}`
    // console.log(`La fecha es: ${diaFormateado}/${mesFormateado}/${año}`);
  }


  toggleMenu(menuId: number){
    if (this.menuActivo === menuId) {
      this.menuActivo = null;
    } else {
      this.menuActivo = menuId;
    }
  }

  incrementarConsecutivo(){
    this.consecutivo++
  }

  getLibros(id:number ){
    this.librosService.getLibros(id).subscribe(
      res => {
        this.books = res;
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

  openForEdit(book : Books){
    // this.selectedBook = book;
  }

  addAndEdit(id: number){
    this.librosService.updateBook(id, this.selectedBook.titulo).subscribe(
      res => alert(res.message)
    )
  }

  deleteAutores(libros: Books) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: '¿Estás seguro de borrar este autor?'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // Realiza la acción de eliminación aquí
        this.librosService.deletelibros(libros.id).subscribe(
          res => window.location.reload()
        );
      }
    });
  }

}
