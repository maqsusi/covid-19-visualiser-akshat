import { Component, OnInit } from '@angular/core';
import { TestAPIService } from '../test-api.service';


@Component({
  selector: 'app-show-total',
  templateUrl: './show-total.component.html',
  styleUrls: ['./show-total.component.css']
})
export class ShowTotalComponent implements OnInit {
  totalData;
  finalTotal = [];
  totalDeceased;
  totalConfirmed;
  totalRecovered;
  totalActive;
  
  constructor(public api: TestAPIService) { 
    console.log("here");
    this.api.getTotal().subscribe((data: any[])=>
    {
      this.totalData = data;
      console.log(this.totalData);
      this.finalTotal.push(this.totalData);
      //console.log(this.finalTotal);
      console.log(this.totalData["TT"].total);
      console.log(this.totalData["TT"].total?.confirmed);
      console.log(this.totalData["TT"].total?.recovered + this.totalData["TT"].total?.migrated);
      console.log(this.totalData["TT"].total?.deceased);
      this.totalConfirmed = this.totalData["TT"].total?.confirmed;
      this.totalDeceased = this.totalData["TT"].total?.deceased;
      this.totalRecovered = this.totalData["TT"].total?.recovered + this.totalData["TT"].total?.migrated;
      this.totalActive = this.totalConfirmed - this.totalDeceased - this.totalRecovered;
      console.log(this.totalConfirmed + " : " + this.totalRecovered + " : " + this.totalDeceased);
      this.api.totalDeceased = this.totalDeceased;
      this.api.totalConfirmed = this.totalConfirmed;
      this.api.totalRecovered = this.totalRecovered;
      this.api.totalActive = this.totalActive;
      // let x, y, count = 0;
      // for(x in this.totalData)
      // {
      //   console.log(x + " : " + this.totalData[x].total?.confirmed);
        
        
      // }
      
      
    }
    )
  }


  ngOnInit(): void {
  }

}
