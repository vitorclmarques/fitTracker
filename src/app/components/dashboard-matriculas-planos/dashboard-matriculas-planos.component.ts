import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard-matriculas-planos',
  templateUrl: './dashboard-matriculas-planos.component.html',
  styleUrl: './dashboard-matriculas-planos.component.scss',
})
export class DashboardMatriculasPlanosComponent {
  data: any;
  options: any;

  alunos: number = 100;  // Quantidade atual de alunos
totalAlunos: number = 150;  // Total necessário de alunos
progressBarr: number = Math.floor((this.alunos / this.totalAlunos) * 100);


  constructor() {
    this.data = {
      labels: ['Mensal', 'Semestral', 'Anual'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#0029FF', '#6A7CDB', '#1F0078'],
          hoverBackgroundColor: ['#374BB1FF', '#374BB1FF', '#374BB1FF'],
        },
      ],
    };

    this.options = {
      // Configuração para fazer o gráfico parecer um semicírculo

      cutout: '70%', // Controla o tamanho do centro cortado
      plugins: {
        legend: {
          display: true,
          position:'bottom' // Remove a legenda
        },
      },
    };
  }



}
