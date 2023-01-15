import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
@Component({
  selector: 'app-bi',
  templateUrl: './bi.page.html',
  styleUrls: ['./bi.page.scss'],
})
export class BiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }
  plotSimpleBarChart() {
    const myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Nombre d annonce publié par mois'
      },
      xAxis: {
        categories: ['Voiture', 'Maison', 'Ordinateur']
      },
      yAxis: {
        title: {
          text: 'annonce publié'
        }
      },
      series: [
        {
          name: 'Janvier',
          type: undefined,
          data: [1, 0, 4]
        },
        {
          name: 'Aout',
          type: undefined,
          data: [2, 4, 3]
        }]
    });
  }
}
