import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class InfoComponentService  {

  constructor(private http: HttpClient) {
  }

  myFunction(): void {
    this.http.get('http://localhost:8080/hello').subscribe(response => {
      console.log(response);
    });
  }

  myFunctionDate(): void {
    this.http.get('http://localhost:8080/testDate').subscribe(response => {
      console.log(response);
    });
  }

}
