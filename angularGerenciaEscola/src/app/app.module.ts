import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ProfessorComponent } from './professor/professor.component';
import { TurmasComponent } from './turmas/turmas.component';
import { EditorDeTurmaComponent } from './editor-de-turma/editor-de-turma.component';
import { ExibirTurmasComponent } from './exibir-turmas/exibir-turmas.component';

import { TurmasService } from './turmas.service';
import { AlunosService } from './alunos.service';
import { DisciplinaService } from './disciplina.service';
import { ProfessorService } from './professor.service';


@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    DisciplinaComponent,
    ProfessorComponent,
    TurmasComponent,
    EditorDeTurmaComponent,
    ExibirTurmasComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [TurmasService, AlunosService, DisciplinaService, ProfessorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
