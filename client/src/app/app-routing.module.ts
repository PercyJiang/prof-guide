import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './components/professor/professor.component';

const routes: Routes = [{ path: 'prof', component: ProfessorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
