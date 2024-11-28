import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../../services/alunos.service';
import { Aluno } from '../../types/alunos.types';

@Component({
  selector: 'app-alunos-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class AlunosFormComponent {
  aluno: Aluno = { name: '', email: '', data_nascimento: '', password: '' };
  isEdit = false;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      try {
        const response = await this.alunosService.getAluno(id);
        console.log('Dados retornados pelo backend:', response);
        const alunoData = response;
        this.aluno = {
          id: alunoData.id,
          name: alunoData.name,
          email: alunoData.email,
          data_nascimento: alunoData.data_nascimento.split('T')[0],
          password: '',
        };
      } catch (error) {
        console.error('Erro ao carregar os dados do aluno:', error);
      }
    }
  }

  async saveAluno() {
    if (this.isEdit) {
      await this.alunosService.updateAluno(this.aluno.id!, this.aluno);
    } else {
      await this.alunosService.createAluno(this.aluno);
    }
    this.router.navigate(['/']);
  }
}
