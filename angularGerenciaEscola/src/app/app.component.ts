import { Component } from '@angular/core';
import {Turma} from './turmas/turmas.model';
import {TurmasService} from './turmas.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    erro_carregar_turmas = true;
    erro_exluir = false;
    turmas = null;
    turma_editando = {id: null, disciplinaId: null, professorId: null, ano: null, alunoTurma: null, alunos:[]};
    inserir_sucesso = false;
    inserir_erro = false;


    constructor(private turmasService: TurmasService) {
        this.atualizarTurmas();
    }

    atualizarTurmas(){
        this.turmasService.todas()
            .subscribe(turmas => {
                    this.turmas = turmas
                    this.erro_carregar_turmas = false;
                },
                () => this.erro_carregar_turmas = true);
    }

    editar(turma){
        this.atualizarTurmas();
        this.turma_editando = turma;

    }
    excluir(turma){
        if(this.turma_editando === turma){
            alert("Você não pode exluir uma turma que está editando")
        }
        else{
            if (confirm("Deseja excluir a turma " + turma.id+"-"+turma.ano+" "+turma.disciplina.nome+" ?")){
                this.turmasService.exluir(turma.id)
                    .subscribe(() => {
                            this.atualizarTurmas();
                            this.erro_exluir = false;
                        },
                        () => this.erro_exluir = true);
            }
        }
    }

    salvar(turma){
        this.turmasService.salvar(turma.id, turma.disciplinaId, turma.professorId, turma.ano, turma.alunos)
            .subscribe(() => {
                this.inserir_sucesso = true;
                this.inserir_erro = false;
                this.atualizarTurmas();
            }, () => {
                this.inserir_erro = true
                this.inserir_sucesso = false;
            })
        this.redefinir();

    }
    redefinir(){
        this.erro_carregar_turmas = false;
        this.erro_exluir = false;
        this.turma_editando = {id: null, disciplinaId: null, professorId: null, ano: null, alunoTurma: null, alunos:[]};
    }
}

