import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TurmasService} from '../turmas.service';

@Component({
  selector: 'app-exibir-turmas',
  templateUrl: './exibir-turmas.component.html',
  styleUrls: ['./exibir-turmas.component.css']
})
export class ExibirTurmasComponent implements OnInit {

    @Input() turmas = null;
    @Input() turma_editando = null;
    @Output() onEditar = new EventEmitter<any>();
    @Output() onExcluir = new EventEmitter<any>();

    ngOnInit() {
    }

    excluir(turma){
        this.onExcluir.emit(turma)
    }
    editar(turma){
        this.onEditar.emit(turma)
    }

}
