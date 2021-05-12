import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class MyComponentService {

  constructor(private http: HttpClient) {
  }



  myFunction(): void {
    this.http.get('http://localhost:8080/hello').subscribe(response => {
      console.log(response);
    });
  }
}
