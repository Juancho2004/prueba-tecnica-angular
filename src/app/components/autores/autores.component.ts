import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/model/books';
import { Employee } from 'src/app/model/employee';
import { AutoresService} from 'src/app/service/autores.service';
import { LibrosService } from 'src/app/service/libros.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../general/confirm-dialog.component';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent {

  img = './assets/img/codesa.png'

  employeeData : Employee[] = [];

  autores: Employee[] = [];

  consecutivo: number = 0;


  constructor(
      private apiService: LibrosService,
      private router: Router,
      private dialog: MatDialog,
    ){}

  ngOnInit(): void {
    this.llenarData()
  }

  incrementarConsecutivo() {
    this.consecutivo++;
  }

  llenarData(){
    this.apiService.getAutores().subscribe( data => {
      this.employeeData = data;
    })
  }


  selectedEmployee: Employee = new Employee();


  deleteAutores(autores: Employee) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: '¿Estás seguro de borrar este autor?'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        // Realiza la acción de eliminación aquí
        this.apiService.deleteAutores(autores.id).subscribe(
          res => window.location.reload()
        );
      }
    });
  }
}
