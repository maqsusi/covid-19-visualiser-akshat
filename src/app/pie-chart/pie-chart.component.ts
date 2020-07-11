import { Component, OnInit } from '@angular/core';
import {TestAPIService} from '../test-api.service';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(public api: TestAPIService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit(): void {
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['% Active Cases', '% Deceased', '% Recovered'];
  public pieChartData: SingleDataSet = [(this.api.totalActive/this.api.totalConfirmed) * 100, (this.api.totalDeceased/this.api.totalConfirmed) * 100, (this.api.totalRecovered/this.api.totalConfirmed) * 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
