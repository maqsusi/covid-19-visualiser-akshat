import { Component, OnInit } from '@angular/core';
import { TestAPIService} from '../test-api.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-state-bar-chart',
  templateUrl: './state-bar-chart.component.html',
  styleUrls: ['./state-bar-chart.component.css']
})
export class StateBarChartComponent implements OnInit {
  currentState;
  active;
  deceased;
  recovered;
  stateDists = [];
  constructor(public api: TestAPIService, public ar: ActivatedRoute) {
    this.currentState = this.ar.snapshot.params.id;
    
    console.log(this.currentState);
    this.active=this.api.stateActive[this.currentState];
    this.deceased = this.api.stateDeceased[this.currentState];
    this.recovered = this.api.stateRecovered[this.currentState];
    console.log((this.active));
    console.log((this.recovered));
    console.log((this.deceased));
    // for(let x in this.api.allData)
    // {
    //   if(x != "LD" && x != "TT")
    //   {
    //     // for(let y in this.api.allData[x])
    //     // {
    //     //   console.log(y);
    //     // }
    //     // console.log(this.api.allData[x]?.districts);
    //     for(let y in this.api.allData[x]?.districts)
    //     { 
          
    //       // this.stateDists.push()
    //       console.log(this.api.allData[this.api.states[this.currentState]]?.districts[y]['total']);
    //     }
    //     console.log("----");
    //   }
      console.log(this.api.allData[this.api.states[this.currentState]]?.districts);
      for(let x in this.api.allData[this.api.states[this.currentState]]?.districts)
      {
        this.stateDists.push({dist: x, conf: this.api.allData[this.api.states[this.currentState]]?.districts[x]['total']?.confirmed, rec: this.api.allData[this.api.states[this.currentState]]?.districts[x]['total']?.recovered, dec: this.api.allData[this.api.states[this.currentState]]?.districts[x]['total']?.deceased} );

      }
      console.log(this.stateDists);
      for(let y in this.stateDists)
      {
        if(this.stateDists[y].dec == undefined)
        {
          this.stateDists[y].dec = 0
        }
      }
      console.log(this.stateDists);
    }
    
    
    
  
  

  ngOnInit(): void {
  }
  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // barChartLabels: Label[] = ['Active Cases', 'Recovered', 'Deceased'];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

  // barChartData: ChartDataSets[] = [
  //   { data: [this.active, this.recovered, this.deceased], label: `Status of COVID-19 Cases` }
  // ];
  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // // barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

  // barChartData: ChartDataSets[] = [
  //   { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  // ];
  
}
