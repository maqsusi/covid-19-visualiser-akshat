import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  regUser(name, pass): Observable<any> {
    return this.http.put("https://5f0428508b06d60016dde0fb.mockapi.io/RegUsers", {name: pass})
    .pipe(
      catchError(err => {
        console.log("The error is" + err);
        return err
      })
    );

  }
  
}
