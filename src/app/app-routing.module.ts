import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresComponent } from './components/autores/autores.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LibrosFormComponent } from './components/libros-form/libros-form.component';
import { AutorComponent } from './components/autor/autor.component';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/autores', pathMatch:'full'
  },
  {
    path: 'autores', component: AutoresComponent,
  },
  {
    path: 'libros/autor/:id', component: LibrosComponent,
  },
  {
    path: 'form', component: LibrosFormComponent,
  },
  {
    path: 'autor', component: AutorComponent,
  },
  {
    path: 'editar/:id', component: EditorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
