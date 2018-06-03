import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TurmasService {
    API_URL = "http://localhost:4200"
    TURMA_GET = "?_expand=professor&_expand=disciplina"
    constructor(private  http: HttpClient) { }

    todas() {
        return this.http.get(this.API_URL + "/turmas" +this.TURMA_GET)
    }

    exluir(id: number){
        return this.http.delete(this.API_URL + "/turmas/" + id);
    }

    salvar(id: number, disciplinaId: number, professorId: number, ano: number, alunos: Array<number>) {
        const turma = {disciplinaId: disciplinaId, professorId: professorId, ano: ano, alunos: alunos};
        if (id) {
            return this.http.patch(this.API_URL + '/turmas/' + id, turma);
        } else {
            return this.http.post(this.API_URL + '/turmas', turma);
        }
    }


}