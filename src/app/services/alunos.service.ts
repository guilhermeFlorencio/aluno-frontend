import { Injectable } from '@angular/core';
import axios from 'axios';
import { Aluno } from '../types/alunos.types';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private baseUrl = 'http://localhost:8000/api/users';

  async getAlunos() {
    const response = await axios.get(this.baseUrl);
    return response.data.dados;
  }

  async getAluno(id: number) {
    const response = await axios.get(`${this.baseUrl}/${id}`);
    return response.data.dados;
  }

  async createAluno(data: Aluno) {
    const response = await axios.post(this.baseUrl, data);
    return response.data;
  }

  async updateAluno(id: number, data: Aluno) {
    const response = await axios.put(`${this.baseUrl}/${id}`, data);
    return response.data;
  }

  async deleteAluno(id: number) {
    const response = await axios.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }
}
