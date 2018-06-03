import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AlunosService {
    API_URL = "http://localhost:4200"
    constructor(private http: HttpClient) { }

    todos(){
        return this.http.get(this.API_URL + "/alunos/")
    }

    encontrar(id){
        return this.http.get(this.API_URL + "/alunos/" + id);
    }


}
