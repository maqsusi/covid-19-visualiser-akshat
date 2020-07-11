import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestAPIService } from '../test-api.service';
 
@Component({
  selector: 'app-state-charts',
  templateUrl: './state-charts.component.html',
  styleUrls: ['./state-charts.component.css']
})
export class StateChartsComponent implements OnInit {
  stateIndex;
  constructor(public api: TestAPIService, public ar: ActivatedRoute) {
    this.stateIndex = this.ar.snapshot.params.id;
    this.api.currentStateId = this.stateIndex;
   }

  ngOnInit(): void {
  }

}
