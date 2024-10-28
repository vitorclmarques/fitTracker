import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-alunos',
  templateUrl: './dashboard-alunos.component.html',
  styleUrl: './dashboard-alunos.component.scss'
})
export class DashboardAlunosComponent implements OnInit {
  chartData: any;
chartOptions: any;

ngOnInit() {
  // Configuração dos dados do gráfico
  this.chartData = {
    labels: ['Alunos Matriculados', 'Alunos Restantes'],
    datasets: [
      {
        data: [100, 50],  // Quantidade de alunos matriculados e restantes
        backgroundColor: ['#42A5F5', '#ebedef'],
        hoverBackgroundColor: ['#64B5F6', '#f4f4f4']
      }
    ]
  };

  // Configuração para fazer o gráfico parecer um semicírculo
  this.chartOptions = {

    cutout: '70%',  // Controla o tamanho do centro cortado
    plugins: {
      legend: {
        display: false  // Remove a legenda
      }
    }
  };
}

}
