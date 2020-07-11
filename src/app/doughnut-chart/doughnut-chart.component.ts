import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { TestAPIService } from "../test-api.service"

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor(public api: TestAPIService) { }

  ngOnInit(): void {
  }
  doughnutChartLabels: Label[] = ['Active Cases', 'Recovered Cases', 'Deceased'];
  doughnutChartData: MultiDataSet = [
    [(this.api.totalActive/this.api.totalConfirmed) * 100, (this.api.totalDeceased/this.api.totalConfirmed) * 100, (this.api.totalRecovered/this.api.totalConfirmed) * 100]
  ];
  doughnutChartType: ChartType = 'doughnut';
}
