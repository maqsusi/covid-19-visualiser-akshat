import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { TestAPIService } from '../test-api.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor(public api : TestAPIService) { }

  ngOnInit(): void {
  }
  lineChartData: ChartDataSets[] = [
    { data: [this.api.totalConfirmed, this.api.totalActive, this.api.totalRecovered, this.api.totalDeceased], label: 'Status of COVID Cases in India'},
  ];

  lineChartLabels: Label[] = ['Total Confirmed Cases', 'Active Cases', 'Recovered', 'Deceased'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(119,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
}
