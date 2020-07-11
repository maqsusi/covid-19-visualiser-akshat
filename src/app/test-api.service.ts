import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestAPIService {
  totalConfirmed;
  totalDeceased;
  totalRecovered;
  totalActive;
  states = [];
  stateTotal = [];
  stateActive = [];
  stateRecovered = [];
  stateDeceased = [];
  currentStateId;
  allData = [];
  done = 0;
  constructor(public http: HttpClient) {

   }
   getTotal(): Observable<any>
   {
     return this.http.get("https://api.covid19india.org/v3/data.json")
     .pipe(
       catchError(err => {
         console.log("The error is: " + err);
         return err;
       })
     );
   }


}
