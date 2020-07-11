import { Component, OnInit } from '@angular/core';
import { TestAPIService} from '../test-api.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(public api: TestAPIService) { 

  }

  ngOnInit(): void {
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Total Cases', 'Active', 'Recovered', 'Deceased'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [this.api.totalConfirmed, this.api.totalActive, this.api.totalRecovered, this.api.totalDeceased], label: 'Status of COVID-19 Cases in India' }
  ];

}
