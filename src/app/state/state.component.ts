import { Component, OnInit } from '@angular/core';
import { TestAPIService } from '../test-api.service';


@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  stateData;
  
  constructor(public api: TestAPIService) {
    if(this.api.done == 0){
    this.api.getTotal().subscribe((data: any[]) => {
      this.stateData = data;
      this.api.allData = data;
      console.log(this.api.allData);
      console.log(this.stateData);
      let x, y, count = 0;
      for (x in this.stateData) {
        if (x == 'LD' || x == 'TT') {
          continue;
        }
        else {
          // console.log(x + " : " + this.stateData[x]?.total?.recovered);
          this.api.states.push(x);
          this.api.stateTotal.push(this.stateData[x]?.total?.confirmed);
          if (this.stateData[x]?.total?.deceased > 0) { 
            this.api.stateDeceased.push(this.stateData[x]?.total?.deceased); 
          }
          else {
            this.api.stateDeceased.push(0);
          }
          if (this.stateData[x]?.total?.recovered > 0)
          { 
            this.api.stateRecovered.push(this.stateData[x]?.total?.recovered); 
          }
          else {
            this.api.stateRecovered.push(0);
          }
          
          this.api.stateActive.push(this.api.stateTotal[this.api.stateTotal.length - 1] - this.api.stateDeceased[this.api.stateDeceased.length - 1] - this.api.stateRecovered[this.api.stateRecovered.length - 1]); 
        }


      }
      // console.log(this.api.states);
      // console.log(this.api.stateTotal);
      //console.log(this.api.stateActive);
      //console.log(this.api.stateDeceased);
      //console.log(this.api.stateRecovered);

    }
    
    )
    this.api.done = 1;
  }}
  // }
  ngOnInit(): void {
  }

}
