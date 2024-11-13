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

  data2:any;
  options2:any;

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
          position:'right' // Remove a legenda
        },
      },
    };

    this.chartHorizontal();
  }

  chartHorizontal(){


    this.data2 = {
        labels: [   'Julho','Junho', 'Maio', 'Abril', 'Março', 'Fevereiro', 'Janeiro', ],
        datasets: [
            {
                label: 'Alunos',
                backgroundColor: ['#0029FF'],
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ],


    };

    this.options2 = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                display:true,
                position:'top'
            }
        }
    };

  }



}
