import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  Highcharts = Highcharts;

  chartOptions = {}

 

  constructor() { }

  ngOnInit(): void {

 
    // Chart.register(...registerables);
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },

      xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

      },
      //  yAxis : {
      //   enabled: false,
      //     // min: 0,
      //     // title: {
      //     //    text: 'Rainfall (mm)'         
      //     // }      
      //  },
      //  tooltip : {
      //     // headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
      //     pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
      //        '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>', footerFormat: '</table>', 
      //        shared: true, useHTML: true
      //  },
      plotOptions: {
        column: {
          pointPadding: 0.3,
          borderWidth: 0
        }
      },
      series: [
        {
          name: 'Days',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
        },
        //  {
        //     name: 'New York',
        //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3,
        //        91.2, 83.5, 106.6, 92.3]
        //  }, 

      ]
    };

  }
}



