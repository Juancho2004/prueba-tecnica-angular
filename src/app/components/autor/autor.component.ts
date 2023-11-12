import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { AutoresService } from 'src/app/service/autores.service';
import { LibrosService } from 'src/app/service/libros.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autor: Employee = new Employee();
  titulo: string = 'Insert your author'


  constructor(private autorService: LibrosService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
  }

  create():void{
    console.log(this.autor)
    this.autorService.createAutor(this.autor).subscribe(
      res => this.router.navigate(['/form'])
    );
  }


}
