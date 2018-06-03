export class Turma {
  id: number;
  disciplinaId: number;
  professorId: number;
  ano: number;

  constructor(id: number, disciplinaId: number, professorId: number, ano: number) {
    this.id = id;
    this.disciplinaId = disciplinaId;
    this.professorId = professorId;
    this.ano = ano;
  }
}
