import { Component, OnInit } from '@angular/core';
import { TestAPIService } from '../test-api.service';

import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-state-pie-chart',
  templateUrl: './state-pie-chart.component.html',
  styleUrls: ['./state-pie-chart.component.css']
})
export class StatePieChartComponent implements OnInit {
  id;
  thisState: number[]= [];
  constructor(public api: TestAPIService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.id = this.api.currentStateId;
    console.log(this.id);
    this.thisState.push(this.api.stateActive[this.id]/(this.api.stateRecovered[this.id] + this.api.stateActive[this.id] + this.api.stateDeceased[this.id]) * 100 );
    this.thisState.push(this.api.stateRecovered[this.id]/(this.api.stateRecovered[this.id] + this.api.stateActive[this.id] + this.api.stateDeceased[this.id]) * 100);
    this.thisState.push(this.api.stateDeceased[this.id]/(this.api.stateRecovered[this.id] + this.api.stateActive[this.id] + this.api.stateDeceased[this.id]) * 100);
    console.log(this.thisState);
   }

  ngOnInit(): void {
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Active'], ['Recovered'], 'Deceased'];
  public pieChartData: SingleDataSet = [this.thisState[0], this.thisState[1], this.thisState[2]];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
