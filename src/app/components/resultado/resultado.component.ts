import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']  
})
export class ResultadoComponent implements OnInit {
bmi: number;
resultado: string;
interpretacion: string;

  constructor(private route:ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
    console.log(this.bmi)

   }

  ngOnInit(): void {
    this.getResultado();
  }
getResultado(){
  if(this.bmi >=25) {
    this.resultado = 'Exceso de peso';
    this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer mas ejercicio'
  } else if (this.bmi >=18.5) {
    this.resultado = 'Normal';
    this.interpretacion = ' Tiene un peso corporal normal. Buen trabajo'
  } else {
    this.resultado = 'Bajo peso'
    this.interpretacion = 'Tiene un peso corporal mas bajo de lo normal. Puede comer un poco más'
  }

}
}
