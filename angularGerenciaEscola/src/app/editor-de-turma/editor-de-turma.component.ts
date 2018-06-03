import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlunosService} from '../alunos.service';
import {DisciplinaService} from '../disciplina.service';
import {ProfessorService} from '../professor.service';

@Component({
  selector: 'app-editor-de-turma',
  templateUrl: './editor-de-turma.component.html',
  styleUrls: ['./editor-de-turma.component.css']
})
export class EditorDeTurmaComponent implements OnInit {
    @Input() turma = null;
    @Output() onSalvar = new EventEmitter<any>();
    @Output() onCancelar = new EventEmitter<any>();
    alunos_remover = []
    aluno = null;

    alunos = null;
    disciplinas = null;
    professores = null;


    constructor(private alunoService: AlunosService,
                private disciplinaService: DisciplinaService,
                private professorService: ProfessorService) {
        this.atualizarAlunos();
        this.atualizarDisciplinas();
        this.atualizarProfessores();
    }

    ngOnInit(){}
    atualizarAlunos(){
        this.alunoService.todos()
            .subscribe(alunos => this.alunos = alunos, () => alert("Não foi possível carregar os alunos!!"))
    }
    atualizarDisciplinas(){
        this.disciplinaService.todos()
            .subscribe(disciplinas => this.disciplinas = disciplinas,
                () => alert("Não foi possível carregar as disciplinas!!"))
    }
    atualizarProfessores(){
        this.professorService.todos()
            .subscribe(professores => this.professores = professores,
                () => alert("Não foi possível carregar os professores!!"))
    }

    salvar(){
        this.aluno = null;
        this.alunos_remover = []
        this.onSalvar.emit(this.turma);

    }

    cancelar(){
        this.onCancelar.emit(null);
    }
    adicionarAluno(){
        if(this.turma.alunos.indexOf(this.aluno) == -1){
            this.turma.alunos.push(this.aluno)
        }
        else {
            alert("Aluno já matriculado!!")
        }
    }
    removereAlunos(){
        for (let id of this.alunos_remover){
            this.turma.alunos.splice(this.turma.alunos.lastIndexOf(parseInt(id)),1)
        }
        this.alunos_remover = this.turma.alunos;
    }
    encontrarAluno(id){
        return this.alunos.filter(aluno => aluno.id == id)[0];
    }

}
