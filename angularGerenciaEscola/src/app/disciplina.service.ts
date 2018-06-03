import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DisciplinaService {
    API_URL = "http://localhost:4200"
    constructor(private http: HttpClient) { }

    todos(){
        return this.http.get(this.API_URL + "/disciplinas/")
    }
}