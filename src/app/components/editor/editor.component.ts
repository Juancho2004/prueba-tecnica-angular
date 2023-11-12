import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { LibrosService } from 'src/app/service/libros.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  autor: Employee = new Employee();
  titulo: string = "Author's edition";

  constructor(private autorService: LibrosService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    console.log('Hola')
    this.activatedRoute.params.subscribe(
      e =>{
        let id =e['id']
        if(id){
          this.autorService.getAutor(id).subscribe(
            es =>this.autor=es
          );
        }
      }
    );
  }

  updateAutores(id: number):void{
    this.autorService.updateAutores(id, this.autor).subscribe(
      res => this.router.navigate(['/autores'])
    );
  }

}
