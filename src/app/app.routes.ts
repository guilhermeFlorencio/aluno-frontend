import { Routes } from '@angular/router';
import { AlunosListComponent } from './alunos/list/list.component';
import { AlunosFormComponent } from './alunos/form/form.component';

export const routes: Routes = [
  { path: '', component: AlunosListComponent },
  { path: 'create', component: AlunosFormComponent },
  { path: 'edit/:id', component: AlunosFormComponent },
];
