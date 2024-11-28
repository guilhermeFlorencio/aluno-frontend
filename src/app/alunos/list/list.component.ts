import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-alunos-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class AlunosListComponent {
  alunos: any[] = [];

  constructor(private alunosService: AlunosService) {}

  async ngOnInit() {
    this.alunos = await this.alunosService.getAlunos();
  }

  async deleteAluno(id: number) {
    await this.alunosService.deleteAluno(id);
    this.alunos = await this.alunosService.getAlunos();
  }
}
