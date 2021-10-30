import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EnlaceService } from './services/enlace.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private enlaceService: EnlaceService){}

  answers = []

  questionsAnswered = 0
  questionsNoAnswered = 0

  mostOwnersNumber = 0

  mostOwners: any;

  ngOnInit(){
    this.enlaceService.getQuestions().subscribe((res: any) => {
      this.answers = res.items
      this.answers.forEach((e: any, i: any) => {
        // TODO: Obtener el número de respuestas contestadas y no contestadas
        e.is_answered ? this.questionsAnswered++ : this.questionsNoAnswered++;
        // TODO: Obtener la respuesta con mayor owners
        // la pregunta dice que el número con mayor owners, pero sólo hay uno en cada objeto del array y es un objeto de por sí
        if(this.mostOwnersNumber < e.owner.reputation) this.mostOwners = e
        // TODO: Obtener la respuesta más vieja y más actual
        // sobre las fechas, éstán en un formato que desconozco
      })
      // TODO: Obtener la respuesta con menor número de vistas
      const respuesta = Math.min.apply(Math, this.answers.map((o: any) => {
        return o.view_count
      }));
      const lessViews = this.answers.find((e:any) => e.view_count === respuesta)
      console.log(`Preguntas contestadas: ${this.questionsAnswered}`);
      console.log(`Preguntas no contestadas: ${this.questionsNoAnswered}`);
      console.log("Respuesta con mayor owners", this.mostOwners)
      console.log("Respuesta con menos vistas", lessViews)
      console.log("%c Made By: " + "%c Alejandro Arellano; Full Stack Dev", "background: red; padding: 10px; color: blue", "background: green; padding: 10px; color: red")
    })
  }
}
/*
  PRUEBA SQL:
  1) ¿Cuál es el nombre aeropuerto que ha tenido mayor movimiento durante el año?
  SELECT COUNT(id_aeropuerto) FROM Tabla de vuelos

  2) ¿Cuál es el nombre aerolínea que ha realizado mayor número de vuelos durante el año?
  SELECT COUNT(id_aerolínea) FROM Tabla de vuelos

  3) ¿En qué día se han tenido mayor número de vuelos?

  4) ¿Cuáles son las aerolíneas que tienen mas de 2 vuelos por día?
  SELECT COUNT(id_aerolinea) FROM Tabla de vuelos WHERE dia=dia

  Este tipo de opeticiones las pude haber hecho desde MySQL WorkBench, pero las quise realizar por mí mismo sin ayuda de la documentación
*/
