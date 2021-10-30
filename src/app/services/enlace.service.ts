import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class EnlaceService {

  constructor(private http: HttpClient) { }

  enlace = environment.enlace

  getQuestions(){
    return this.http.get(this.enlace)
  }
}
